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
    <div className="flex min-h-screen h-[100dvh] items-center justify-center flex-col gap-1">
      <Card className="w-full max-w-sm p-8 shadow-md">
        <CardHeader className="text-center">
          <h2 className="text-xl font-semibold text-center">Sign Up</h2>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col space-y-4">
            <Input
              placeholder="Name"
              labelPlacement="inside"
              variant="bordered"
              type="text"
              required
            />
            <Input
              placeholder="Username"
              labelPlacement="inside"
              variant="bordered"
              type="text"
              required
            />
            <Input
              placeholder="Email"
              labelPlacement="inside"
              variant="bordered"
              type="email"
              required
            />
            <Input
              placeholder="Password"
              labelPlacement="inside"
              variant="bordered"
              type="password"
              required
            />
            <Spacer y={1} />
            <Button type="submit" className="bg-blue-500">
              Sign Up
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <p className="text-center w-full">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login In
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
