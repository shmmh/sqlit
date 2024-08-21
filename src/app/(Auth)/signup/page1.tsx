import Link from "next/link"
import Form from "@/components/form"
import { redirect } from "next/navigation"
import { createUser, getUserByEmail, getUserByUsername } from "@/lib/db"
import { SubmitButton } from "@/components/submit-button"

export default function Signup() {
  async function register(formData: FormData) {
    "use server"
    console.log("formData", formData)
    let email = formData.get("email") as string
    let password = formData.get("password") as string
    let name = formData.get("name") as string
    let username = formData.get("username") as string
    let user = await getUserByEmail(email)
    let user1 = await getUserByUsername(username)

    if (user.length > 0) {
      throw new Error("User with this email already exists")
    } else {
      let success = await createUser(email, password, name, username)
      if (!success) throw new Error("Failed to create user")
      redirect("/login")
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form formType="register" action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Already have an account? "}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {" instead."}
          </p>
        </Form>
      </div>
    </div>
  )
}
