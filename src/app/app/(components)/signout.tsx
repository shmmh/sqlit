"use client"

import { Button } from "@nextui-org/react"
import React from "react"
import { signOut } from "next-auth/react"

export default function SignOutButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Button
      size="md"
      color="primary"
      onClick={async () => {
        await signOut({ redirect: true, callbackUrl: "/" })
      }}
    >
      {children}
    </Button>
  )
}
