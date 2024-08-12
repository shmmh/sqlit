import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"
import { Input } from "@nextui-org/react"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { useState } from "react"
import { EyeSlashFilledIcon } from "@/components/eye-slah-filled"
import { EyeFilledIcon } from "@/components/eye-filled"

export default function Component() {
  // const [isVisible, setIsVisible] = useState(false)
  let isVisible = false

  const toggleVisibility = () => !isVisible

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex-col left">
          <p className="text-2xl font-bold">Login</p>
          <br />
          <p>Enter your email and password to access your account.</p>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              isRequired
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password">Password</label>
            </div>
            <Input
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-full"
            />
            <Link
              href="#"
              className="text-sm font-medium underline underline-offset-4 hover:text-primary"
              prefetch={false}
            >
              Forgot password?
            </Link>
          </div>
        </CardBody>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
