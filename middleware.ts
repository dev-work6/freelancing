import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth/jwt';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths
  const isPublicPath = path === '/login' || path === '/signup' || path === '/';
  const isApiAuthPath = path.startsWith('/api/auth/');
  const isApiPath = path.startsWith('/api/');
  const isAdminPath = path.startsWith('/admin/');
  
  // Get token from cookie
  const token = request.cookies.get('authToken')?.value;

  // If user is on a public path and has a valid token, redirect to dashboard
  if (isPublicPath && token) {
    try {
      const decoded = verifyToken(token);
      if (decoded && typeof decoded !== 'string') {
        if (decoded.role === 'admin') {
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    } catch (error) {
      // Token is invalid, continue to public path
    }
  }

  // Allow public paths and auth API endpoints
  if (isPublicPath || isApiAuthPath) {
    return NextResponse.next();
  }

  // Protected routes - check for valid token
  if (!token) {
    // For API routes, return 401 instead of redirecting
    if (isApiPath) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      if (isApiPath) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }

 
    // Check regular dashboard access for admin
    if (path === '/dashboard' && typeof decoded !== 'string' && decoded.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // Clone the request headers and add the user token for API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('Authorization', `Bearer ${token}`);

    // Return the response with modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
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
    '/api/:path*',
    '/login',
    '/signup'
  ]
}
