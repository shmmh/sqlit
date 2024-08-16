import Link from "next/link"
import { Card } from "@nextui-org/react"
// main.ts
if (process.env.NODE_ENV === "development") {
  import("autopreview/react").then(({ default: AutoPreview }) => {
    new AutoPreview("#root")
  })
}

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh] max-w-7xl justify-center align-middle mx-auto">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Simplify Your Shared Expenses
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Welcome to Sqlit (/sqlɪt/)—your go-to solution for splitting
                    bills, managing group expenses, and staying organized.
                    Whether you’re out with friends, sharing household expenses,
                    or planning a trip, we make it easy to divide costs and
                    settle up.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download App
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Effortless Receipt Scanning{" "}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  No more manual calculations or guesswork. Just snap a photo of
                  your receipt, and our app will automatically split the bill
                  for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Add Your Friends with Ease
                      </h3>
                      <p className="text-muted-foreground">
                        Invite friends and family to split expenses by simply
                        entering their username or scanning a QR code. Group
                        expenses have never been more straightforward.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Flexible Payment Options
                      </h3>
                      <p className="text-muted-foreground">
                        Send payment links directly from the app or share your
                        payment details. We support a variety of payment methods
                        to make settling debts quick and convenient.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Comprehensive Account Management{" "}
                      </h3>
                      <p className="text-muted-foreground">
                        Manage your account effortlessly with features that
                        include:Username customization for a personalized
                        experience.Email integration for secure and easy account
                        access.Friends list management to quickly add or select
                        people to split bills with.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real people who have transformed their workflows
                  with Sqlit App.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6 shadow-md">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <UserIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Emma L.</h4>
                        <p className="text-sm text-muted-foreground">Foodie </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "A Must-Have for Group Dinners! I never realized splitting
                      bills could be this easy. The receipt scanning feature
                      alone is worth it. Highly recommend!”
                    </p>
                  </div>
                </Card>
                <Card className="p-6 shadow-md">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <UserIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Jake M.</h4>
                        <p className="text-sm text-muted-foreground">
                          College Student
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I was skeptical about trying a new app, but Sqlit App has
                      exceeded my expectations. The intuitive interface and
                      powerful features have transformed the way I manage my
                      projects."
                    </p>
                  </div>
                </Card>
                <Card className="p-6 shadow-md">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary p-2 text-primary-foreground">
                        <UserIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Michael Johnson</h4>
                        <p className="text-sm text-muted-foreground">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Sqlit App has been a game-changer for our social
                      gatherings. team. The AI transcription feature has saved
                      us countless hours of manual budgeting. Highly recommend!"
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to take the fuss out of bill splitting.
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the revolution today! Get your time, money, and sanity
                back. The modern take on the age-old problem of splitting bills.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started For Free
              </Link>
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Login
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
