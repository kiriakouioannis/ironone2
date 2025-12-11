import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { booking } = await request.json()

    const serviceTypes: { [key: string]: string } = {
      'linen-wash': 'Linen Wash',
      'ironing': 'Ironing Service',
      'both': 'Wash & Ironing'
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .booking-details {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .detail-row {
              padding: 10px 0;
              border-bottom: 1px solid #e9ecef;
            }
            .detail-row:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #495057;
              display: inline-block;
              width: 120px;
            }
            .value {
              color: #212529;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #6c757d;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0;">🎉 New Booking Received!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Ironone Laundry Service</p>
          </div>
          <div class="content">
            <p>You have received a new booking request:</p>

            <div class="booking-details">
              <div class="detail-row">
                <span class="label">Customer:</span>
                <span class="value">${booking.name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">${booking.email}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">${booking.phone}</span>
              </div>
              <div class="detail-row">
                <span class="label">Address:</span>
                <span class="value">${booking.address}</span>
              </div>
              <div class="detail-row">
                <span class="label">Service:</span>
                <span class="value">${serviceTypes[booking.service] || booking.service}</span>
              </div>
              <div class="detail-row">
                <span class="label">Date:</span>
                <span class="value">${booking.formattedDate}</span>
              </div>
              <div class="detail-row">
                <span class="label">Time:</span>
                <span class="value">${booking.time}</span>
              </div>
              ${booking.notes ? `
                <div class="detail-row">
                  <span class="label">Notes:</span>
                  <span class="value">${booking.notes}</span>
                </div>
              ` : ''}
            </div>

            <p style="margin-top: 20px;">Please log in to your Sanity dashboard to manage this booking and update its status.</p>
          </div>
          <div class="footer">
            <p>This is an automated notification from your Ironone booking system.</p>
          </div>
        </body>
      </html>
    `

    const data = await resend.emails.send({
      from: 'Ironone Bookings <onboarding@resend.dev>',
      to: ['kiriakouioannis@gmail.com'],
      subject: `New Booking: ${booking.name} - ${booking.formattedDate}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
