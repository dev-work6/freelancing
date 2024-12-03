import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getTokenFromHeader, verifyToken } from '@/lib/auth/jwt';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths
  const isPublicPath = path === '/login' || path === '/signup' || path === '/';
  const isApiAuthPath = path.startsWith('/api/auth/');
  const isApiPath = path.startsWith('/api/');
  const isAdminPath = path.startsWith('/admin/');
  const publicApiRoutes = ['/api/services/hourly/'];
  // Get token from Authorization header
  const token = getTokenFromHeader(request.headers.get('authorization') || '');

  // Allow public paths, auth API endpoints, and public API routes without token
  if (isPublicPath || isApiAuthPath || publicApiRoutes.includes(path)) {
    return NextResponse.next();
  }
  
  try {
    const decoded = verifyToken(token || '');
    if (!decoded) {
      if (isApiPath) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check admin access for admin paths
    if (isAdminPath) {
      if (typeof decoded !== 'string' && decoded.role !== 'admin') {
        // Non-admin users cannot access admin paths
        if (isApiPath) {
          return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        return NextResponse.redirect(new URL('/', request.url));
      }
    }

    // Pass the request through with the Authorization header
    return NextResponse.next();
  } catch (error) {
    if (isApiPath) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/',
    // '/admin/:path*',
    '/login',
    '/signup',
  ]
}
