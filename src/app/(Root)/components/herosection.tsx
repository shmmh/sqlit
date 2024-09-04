import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] sm:grid-col-1">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="overflow-hidden text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-600 dark:via-neutral-400 dark:to-neutral-200">
                <span>Simplify Your </span>
                <br className="block sm:hidden" />
                <span>Shared Expenses</span>
              </h1>
              <p className="w-full text-muted-foreground md:text-xl">
                Welcome to Sqlit (/sqlɪt/)—your go-to solution for splitting
                bills, managing group expenses, and staying organized. Whether
                you’re out with friends, sharing household expenses, or planning
                a trip, we make it easy to divide costs and settle up.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Signin
              </Link>
            </div>
          </div>
          {/* <img
            src="/placeholder.svg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
          /> */}
        </div>
      </div>
    </section>
  )
}
