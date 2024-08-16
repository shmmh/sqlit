export const Keyfeatures = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Effortless Receipt Scanning{" "}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No more manual calculations or guesswork. Just snap a photo of
              your receipt, and our app will automatically split the bill for
              you.
            </p>
          </div>
        </div>
        <div className="grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 sm:grid-col-1">
          <div className="flex flex-col justify-center space-y-4 w-full">
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
                    payment details. We support a variety of payment methods to
                    make settling debts quick and convenient.
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
          {/* <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Features"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          /> */}
        </div>
      </div>
    </section>
  )
}
