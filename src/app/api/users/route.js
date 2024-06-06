import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// export async function GET() {
//     try {
//         const users = await prisma.User.findMany({});
//         // console.log('Hii')
//         return NextResponse.json({ success: true, users });
//     } catch (error) {
//         return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//     }
// }

export async function POST(req) {
    try { 
        const { username, password } = await req.json();
        
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(username, hashedPassword);

        const users = await prisma.User.create({
            data: {
                username,
                password: hashedPassword,
            },
          })
        return NextResponse.json({ success: true, users });
    } catch (error) {
        console.log("Error")
        return NextResponse.json({ success: false, error: error.message });
    }
  }