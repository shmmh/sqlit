import { SubmitButton } from "@/components/submit-button"
import { auth, signIn } from "@/lib/auth"
import {
  Input,
  Spacer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react"
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const session = await auth()
  if (session) redirect("/app/dashboard")

  return (
    <div className="flex min-h-[100dvh]  items-center justify-center flex-col gap-1">
      <Link href="/">
        {/* <AcmeLogo /> */}
        <p className="font-black text-2xl md:text-4xl lg:text-6xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          SꟼLIT
        </p>
      </Link>
      <Card className="w-full max-w-sm p-8 shadow-md">
        <CardHeader>
          <h2 className="text-2xl font-semibold w-full text-center">Login</h2>
        </CardHeader>
        <CardBody>
          <form
            className="flex flex-col space-y-4"
            action={async (formData: FormData) => {
              "use server"
              const email = formData.get("email") as string
              const password = formData.get("password") as string
              await signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/app/dashboard",
              })
            }}
          >
            <Input
              placeholder="Email"
              labelPlacement="inside"
              variant="bordered"
              type="email"
              name="email"
              required
            />
            <Input
              placeholder="Password"
              labelPlacement="inside"
              variant="bordered"
              type="password"
              name="password"
              required
            />
            <Spacer y={1} />
            <SubmitButton>Sign In</SubmitButton>
          </form>
        </CardBody>
        <CardFooter>
          <p className="text-center w-full">
            {`Don't have an account?`}
            <a href="/signup" className="text-blue-500">
              Sign up
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
