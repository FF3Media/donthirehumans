import { NextRequest, NextResponse } from 'next/server'

// Password protection disabled
export function middleware(_req: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
