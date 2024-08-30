import { BeakerIcon } from "@heroicons/react/24/solid"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  User,
  Button,
} from "@nextui-org/react"
import Link from "next/link"
import { UserBalanceSection } from "../(components)/user-balance"
import { RecentBillingSection } from "../(components)/recent-billing"
import { RecentActivitySection } from "../(components)/recent-activity"
import { signOut } from "next-auth/react"
import { SubmitButton } from "@/components/submit-button"
import SignOutButton from "../(components)/signout"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { createExpense, getAllExpenses } from "@/lib/db/expenses_crud"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await auth()
  if (!session) return redirect("/login")
  console.log("session", session)
  const user_expenses = await createExpense({
    userId: session?.user.id as string,
    amount: "100.0",
    paid: false,
  })

  return (
    <div className="p-4 flex flex-col gap-8 justify-start pb-20">
      <User
        name="Junior Garcia"
        description={"@juniorgarcia"}
        classNames={{
          base: "justify-start",
        }}
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/30373425?v=4",
        }}
      />
      {session && <SignOutButton>Signout</SignOutButton>}
      <UserBalanceSection />
      <RecentBillingSection />
      <RecentActivitySection />
    </div>
  )
}
