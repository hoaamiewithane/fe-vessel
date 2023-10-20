import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = new Set(['/user', '/vessel', '/profile']);
const loginRoute = '/login';
const userRoute = '/user';

export default function middleware(req: NextRequest) {
  const hasToken = req.cookies.get('token');
  const currentPath = req.nextUrl.pathname;

  if (!hasToken && protectedRoutes.has(currentPath)) {
    return NextResponse.redirect(new URL(loginRoute, req.nextUrl.origin).toString());
  }

  if (hasToken && currentPath === loginRoute) {
    return NextResponse.redirect(new URL(userRoute, req.nextUrl.origin).toString());
  }
}
