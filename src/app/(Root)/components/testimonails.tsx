import { Card } from "@nextui-org/react"
import { UserIcon } from "../page"

export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from real people who have transformed their workflows with
              Sqlit App.
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
                  bills could be this easy. The receipt scanning feature alone
                  is worth it. Highly recommend!”
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
                  exceeded my expectations. The intuitive interface and powerful
                  features have transformed the way I manage my projects."
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
                  "Sqlit App has been a game-changer for our social gatherings.
                  team. The AI transcription feature has saved us countless
                  hours of manual budgeting. Highly recommend!"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
