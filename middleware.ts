import { NextRequest, NextResponse } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'frankmedia2024'

export function middleware(req: NextRequest) {
  // Allow API endpoints through
  if (req.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  const cookie = req.cookies.get('site-auth')

  if (cookie?.value === PASSWORD) {
    return NextResponse.next()
  }

  // Redirect to password gate
  const url = req.nextUrl.clone()
  url.pathname = '/password'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /password (the gate page itself)
     * - /api/auth (the auth endpoint)
     * - _next/static, _next/image, favicon.ico
     */
    '/((?!password|api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
}
