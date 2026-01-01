import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'
import { client } from '@/sanity/lib/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, service, date, time, notes } = body

    if (!name || !email || !phone || !address || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if the selected date is blocked
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

    const booking = await writeClient.create({
      _type: 'booking',
      name,
      email,
      phone,
      address,
      service,
      date,
      time,
      notes: notes || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    })

    try {
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          booking: {
            ...booking,
            formattedDate: new Date(date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          }
        }),
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
    }

    return NextResponse.json({
      success: true,
      booking
    }, { status: 201 })

  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}
