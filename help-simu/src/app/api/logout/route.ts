// app/api/logout/route.ts (for App Router)
import { NextResponse } from 'next/server';

export async function GET() {

  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0), // Expire immediately
    path: '/',            // Make sure path matches original
  });

  return response;
}
