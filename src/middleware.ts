import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// URL of the Express.js backend
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;


  // Determine required role based on route
  let requiredRole: string | null = null;

  if (pathname.startsWith('/student')) {
    requiredRole = 'student';

  } else if (pathname.startsWith('/admin')) {

    requiredRole = 'admin';

  } else {
    return NextResponse.next(); // Skip for non-protected routes
  }

  // Read the refresh token from cookies
  const key = requiredRole === 'student' ? 's_r_t' : 'a_r_t';   
  const refreshToken =  request.cookies.get(key)?.value;

  const redirectUrl = requiredRole === 'student' ? '/login' : '/admin-login';

  console.log(refreshToken)

  if (!refreshToken) {
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  return NextResponse.next();
}
// Apply middleware to student/* and admin/* routes
export const config = {
  matcher: ['/student/:path*', '/admin/:path*'],
}