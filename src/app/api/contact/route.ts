import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
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
            .contact-details {
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
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #667eea;
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
            <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Ironone Contact Form</p>
          </div>
          <div class="content">
            <p>You have received a new message through your contact form:</p>

            <div class="contact-details">
              <div class="detail-row">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              ${phone ? `
                <div class="detail-row">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
              ` : ''}
              <div class="detail-row">
                <span class="label">Subject:</span>
                <span class="value">${subject}</span>
              </div>
            </div>

            <div class="message-box">
              <h3 style="margin-top: 0; color: #667eea;">Message:</h3>
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>

            <p style="margin-top: 20px;">Please respond to this inquiry as soon as possible.</p>
          </div>
          <div class="footer">
            <p>This is an automated notification from your Ironone contact form.</p>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'Ironone Contact <onboarding@resend.dev>',
      to: ['kiriakouioannis@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
