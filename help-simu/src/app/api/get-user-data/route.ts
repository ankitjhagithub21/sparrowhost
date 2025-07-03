// app/api/logout/route.ts (for App Router)
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {

    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/get-user-data`, {
            withCredentials: true
        });

        
        const response = NextResponse.json({success:true,user:data});
       
        // response.cookies.set('token', '', {
        //     httpOnly: true,if
        //     expires: new Date(0), // Expire immediately
        //     path: '/',            // Make sure path matches original
        // });

        return response;
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Server error",success:false})
    }
}
