import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const availability = await client.fetch(
      `*[_type == "availability"] {
        date,
        isBlocked,
        reason
      }`
    )

    // Get only blocked dates
    const blockedDates = availability
      .filter((item: { isBlocked: boolean }) => item.isBlocked)
      .map((item: { date: string }) => item.date)

    return NextResponse.json({ blockedDates }, { status: 200 })
  } catch (error) {
    console.error('Error fetching availability:', error)
    return NextResponse.json(
      { error: 'Failed to fetch availability' },
      { status: 500 }
    )
  }
}
