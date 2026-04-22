import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, brand, revenue, message } = await req.json()

    if (!name || !email || !brand || !revenue) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Frank Media <onboarding@resend.dev>',
      to: 'ff@ff3media.com',
      subject: `New audit request from ${name} — ${brand}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1D1D1F;">
          <div style="background: #1A7A35; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 20px; margin: 0; font-weight: 700;">New Audit Request</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">frankmedia.co</p>
          </div>
          <div style="background: #F5F5F7; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #6E6E73; width: 140px;">Name</td>
                <td style="padding: 10px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid rgba(0,0,0,0.08);">
                <td style="padding: 10px 0; font-size: 13px; color: #6E6E73;">Email</td>
                <td style="padding: 10px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">
                  <a href="mailto:${email}" style="color: #1A7A35;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid rgba(0,0,0,0.08);">
                <td style="padding: 10px 0; font-size: 13px; color: #6E6E73;">Brand</td>
                <td style="padding: 10px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${brand}</td>
              </tr>
              <tr style="border-top: 1px solid rgba(0,0,0,0.08);">
                <td style="padding: 10px 0; font-size: 13px; color: #6E6E73;">Revenue</td>
                <td style="padding: 10px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${revenue}</td>
              </tr>
              ${message ? `
              <tr style="border-top: 1px solid rgba(0,0,0,0.08);">
                <td style="padding: 10px 0; font-size: 13px; color: #6E6E73; vertical-align: top;">Notes</td>
                <td style="padding: 10px 0; font-size: 15px; color: #1D1D1F;">${message}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px;">
              <a href="mailto:${email}" style="display: inline-block; background: #1A7A35; color: #fff; padding: 12px 24px; border-radius: 980px; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to ${name} →</a>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
