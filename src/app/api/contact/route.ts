import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    // Check for API key at runtime
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sghir.ma@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0a0e17 0%, #1a1f2e 100%); border-radius: 12px; padding: 30px; margin-bottom: 20px;">
              <h1 style="color: #f5f0e8; margin: 0 0 10px 0; font-size: 24px;">New Contact Message</h1>
              <p style="color: #c2703c; margin: 0; font-size: 14px;">From your portfolio website</p>
            </div>

            <div style="background: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
              <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">From</label>
                <p style="margin: 0; font-size: 16px; color: #333;"><strong>${name}</strong></p>
                <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">${email}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Subject</label>
                <p style="margin: 0; font-size: 16px; color: #333;">${subject}</p>
              </div>

              <div>
                <label style="display: block; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Message</label>
                <div style="background: white; border-radius: 8px; padding: 15px; border: 1px solid #e0e0e0;">
                  <p style="margin: 0; white-space: pre-wrap; color: #333;">${message}</p>
                </div>
              </div>
            </div>

            <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e0e0e0;">
              <a href="mailto:${email}" style="display: inline-block; background: #c2703c; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500;">Reply to ${name}</a>
            </div>

            <p style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </body>
        </html>
      `,
      text: `
New Contact Message from your Portfolio

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

---
Reply to this email to respond to ${name}.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
