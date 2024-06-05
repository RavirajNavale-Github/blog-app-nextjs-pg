import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.User.findMany({});
        // console.log('Hii')
        return NextResponse.json({ success: true, users });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try { 
        const { username, password, role } = await req.json();
        console.log(username, password, role)
        const users = await prisma.User.create({
            data: {
                username,
                password,
                role
            },
          })
        return NextResponse.json({ success: true, users });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
  }