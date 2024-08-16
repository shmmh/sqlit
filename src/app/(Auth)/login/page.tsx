import {
  Input,
  Button,
  Spacer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react"

export default function LoginPage() {
  return (
    <div className="flex h-[100dvh] min-h-screen  items-center justify-center flex-col gap-1">
      <Card className="w-full max-w-sm p-8 shadow-md">
        <CardHeader>
          <h2 className="text-xl font-semibold">Login</h2>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col space-y-4">
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
              Sign In
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <p className="text-center w-full">
            Don't have an account?{" "}
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
