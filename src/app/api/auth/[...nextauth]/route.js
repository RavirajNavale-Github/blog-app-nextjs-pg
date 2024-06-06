import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
 
const prisma = new PrismaClient();

async function login(credentials) {

  // console.log("credentials.username===",credentials.username)
  // console.log("prisma.User===",prisma.User)

  

  try {
    console.log("111111111111111111111111111111111111111111111111")
    const user = await prisma.User.findUnique({
      where: { username: credentials.username },
    });
    // console.log("00000000000000000000000000000000000001")
    
    if (!user) {
      // Handle the case where the user is not found
      console.log('User not found');
    } else {
      // User found
      console.log('User found:', user);
    }
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error('Error finding user:', error);
  }
  

  if (!user) {
    console.log("S====================================================================")
    throw new Error("Wrong Credentials....");
  }

  const isCorrect = await bcrypt.compare(credentials.password, user.password);

  if (!isCorrect) {
    throw new Error("Wrong Credentials....");
  }
}

export const authOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log("Error", error);
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      console.log("This is token =================== ", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
      }
      console.log("This is session = ", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
