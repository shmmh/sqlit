import Link from "next/link"
import Form from "@/components/form"
import { redirect } from "next/navigation"
import { createUser, getUserByEmail, getUserByUsername } from "@/lib/db"
import { SubmitButton } from "@/components/submit-button"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spacer,
} from "@nextui-org/react"

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
    <div className="flex min-h-[100dvh] items-center justify-center flex-col gap-2">
      <Link href="/">
        {/* <AcmeLogo /> */}
        <p className="font-black text-2xl md:text-4xl lg:text-6xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          SꟼLIT
        </p>
      </Link>
      <Card className="w-full max-w-sm p-8 shadow-md">
        <CardHeader className="mx-auto">
          <h2 className="text-xl font-semibold w-full text-center">Sign Up</h2>
        </CardHeader>
        <CardBody>
          {/* <Form formType="register" action={register}>
            <SubmitButton>Sign Up</SubmitButton>
            <p className="text-center text-sm text-gray-600">
              {"Already have an account? "}
              <Link href="/login" className="font-semibold text-gray-800">
                Sign in
              </Link>
              {" instead."}
            </p>
          </Form> */}
          <form className="flex flex-col space-y-4" action={register}>
            <Input
              placeholder="Name"
              labelPlacement="inside"
              variant="bordered"
              type="text"
              id="name"
              name="name"
              required
            />
            <Input
              placeholder="Username"
              labelPlacement="inside"
              variant="bordered"
              type="text"
              id="username"
              name="username"
              required
            />
            <Input
              placeholder="Email"
              labelPlacement="inside"
              variant="bordered"
              type="email"
              name="email"
              id="email"
              required
            />
            <Input
              placeholder="Password"
              labelPlacement="inside"
              variant="bordered"
              type="password"
              id="password"
              name="password"
              required
            />
            <Spacer y={1} />
            <SubmitButton>Sign Up</SubmitButton>
          </form>
        </CardBody>
        <CardFooter>
          <p className="text-center w-full">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Sqlit. All rights reserved.
      </p>
    </div>
  )
}
