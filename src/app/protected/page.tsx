import { auth, signOut } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  let session = await auth()
  if (!session) return redirect("/login")

  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        You are logged in as {session?.user?.name}
        <SignOut />
      </div>
    </div>
  )
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  )
}
