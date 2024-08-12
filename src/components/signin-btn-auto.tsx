"user client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInBtnAuto() {
  const { data: session } = useSession()

  if (session) {
    return <button onClick={() => signOut()}>Sign Out</button>
  } else {
    return <button onClick={() => signIn()}>Sign In</button>
  }
}
