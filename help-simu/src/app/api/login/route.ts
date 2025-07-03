import axios from 'axios';
import { NextResponse } from 'next/server';

axios.defaults.withCredentials = true;

export async function POST(req: Request) {
  try {
    const body = await req.json();
  
    // Make the POST request to external API
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`, body);

    const token = data?.token;

    if (!token) {
      return NextResponse.json({ message: "No token received" }, { status: 401 });
    }

    const response = NextResponse.json(
      { message: 'Login successful', data },
      { status: 200 }
    );

    // Set token as cookie
    response.headers.set(
      'Set-Cookie',
      `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
    );

    return response;

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
