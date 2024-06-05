import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const blogs = await prisma.Blog.findMany({});
        // console.log('Hii')
        return NextResponse.json({ success: true, blogs });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
  try { 
      const { title, content, description } = await req.json();
      console.log(title, content, description)
      const user = await prisma.Blog.create({
          data: {
            title,
            description,
            content
          },
        })
      return NextResponse.json({ success: true, user });
  } catch (error) {
      return NextResponse.json({ success: false, error: error.message });
  }
}