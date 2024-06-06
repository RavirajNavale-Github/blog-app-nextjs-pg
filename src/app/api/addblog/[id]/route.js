import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const blog = await prisma.Blog.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!blog) {
      return NextResponse.json({
        success: false,
        error: "Blog not found.",
      });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// Delete Blog
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
      const deleteUser = await prisma.Blog.delete({
          where: {
              id: parseInt(id),
          },
      });
      return NextResponse.json({ success: true ,deleteUser});
  } catch (error) {
      return NextResponse.json({ success: false, error: error.message });
  }
}


//Update Blog
export async function PUT(req, { params }) {
  const { id } = params;
  const { title, description, content } = await req.json();

  try {
      const blog = await prisma.Blog.findUnique({
          where: {
              id: parseInt(id),
          },
      });

      if (!blog) {
          return NextResponse.json({ success: false, error: "Blog not found" });
      }

      const updatedUser = await prisma.Blog.update({
          where: {
              id: parseInt(id), 
          },
          data: {
              title,
              description,
              content,
          },
      });

      return NextResponse.json({ success: true, updatedUser });
  } catch (error) {
      return NextResponse.json({ success: false, error: error.message });
  }
}