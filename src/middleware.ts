import { NextResponse, type NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const config = {
  matcher: ['/', '/dashboard', '/profile']
}

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  const { pathname } = request.nextUrl

  // Redirect to login if accessing protected route without authentication
  if (!token && config.matcher.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to dashboard if logged in and trying to access auth pages
  if (token && ['/login', '/register'].includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}