
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {

  const authCookie = req.cookies.get('token')?.value;

  // Define the protected route (e.g., the home route)
  const protectedRoute = '/'; 

  // Check if the request is for the protected route and the cookie is missing/invalid
  if (req.nextUrl.pathname === protectedRoute && (!authCookie)) {
    // Redirect to a login page or another route if not authenticated
    const url = req.nextUrl.clone();
    url.pathname = '/login'; // Or any other unauthenticated route
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if authenticated or not a protected route
  return NextResponse.next();
}

// Configure which paths the middleware should apply to (optional)
export const config = {
  matcher: ['/'], // Apply middleware only to the home route
};