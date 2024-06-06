'use client'
import { SessionProvider } from "next-auth/react"

export default function AuthProvoider({
  children,
}) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}