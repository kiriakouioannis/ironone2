import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'
import { client } from '@/sanity/lib/client'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const booking = await client.fetch(
      `*[_type == "booking" && _id == $id][0] {
        _id,
        name,
        email,
        phone,
        address,
        service,
        date,
        time,
        notes,
        status,
        createdAt
      }`,
      { id }
    )

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ booking }, { status: 200 })

  } catch (error) {
    console.error('Booking retrieval error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve booking' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { name, email, phone, address, service, date, time, notes, status } = body

    // Verify the booking exists
    const existingBooking = await client.fetch(
      `*[_type == "booking" && _id == $id][0]`,
      { id }
    )

    if (!existingBooking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // If date is being changed, check if the new date is blocked
    if (date && date !== existingBooking.date) {
      const selectedDate = new Date(date).toISOString().split('T')[0]
      const availability = await client.fetch(
        `*[_type == "availability" && date == $date][0]`,
        { date: selectedDate }
      )

      if (availability && availability.isBlocked) {
        return NextResponse.json(
          { error: 'This date is not available for booking. Please select another date.' },
          { status: 400 }
        )
      }
    }

    // Update the booking
    const updatedBooking = await writeClient
      .patch(id)
      .set({
        ...(name && { name }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(address && { address }),
        ...(service && { service }),
        ...(date && { date }),
        ...(time && { time }),
        ...(notes !== undefined && { notes }),
        ...(status && { status }),
        updatedAt: new Date().toISOString()
      })
      .commit()

    // Send email notification about the update
    try {
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          booking: {
            ...updatedBooking,
            formattedDate: new Date(updatedBooking.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            isUpdate: true
          }
        }),
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
    }

    return NextResponse.json({
      success: true,
      booking: updatedBooking
    }, { status: 200 })

  } catch (error) {
    console.error('Booking update error:', error)
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Verify the booking exists
    const existingBooking = await client.fetch(
      `*[_type == "booking" && _id == $id][0]`,
      { id }
    )

    if (!existingBooking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // Delete the booking
    await writeClient.delete(id)

    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully'
    }, { status: 200 })

  } catch (error) {
    console.error('Booking deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete booking' },
      { status: 500 }
    )
  }
}
