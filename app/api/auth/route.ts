import { NextRequest, NextResponse } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'frankmedia2024'

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  if (password === PASSWORD) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('site-auth', PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
