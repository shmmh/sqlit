import { BeakerIcon } from "@heroicons/react/24/solid"
import { User } from "@nextui-org/react"
import { UserBalanceSection } from "../(components)/user-balance"
import { RecentExpensesSection } from "../(components)/recent-expenses"
import { RecentActivitySection } from "../(components)/recent-activity"

import SignOutButton from "../(components)/signout"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import {
  calculateUserBalances,
  getUserExpensesById,
  getUserFriendsById,
  getUserGroupsById,
} from "@/lib/db/user_crud"
import { get } from "http"
import ExpenseForm from "../expenses/expense-form"

export default async function Dashboard() {
  const session = await auth()
  if (!session) return redirect("/login")
  // //console.log("session", session)

  const userId = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p"
  const userbalance = await calculateUserBalances(userId)

  const userExpenses = await getUserExpensesById(userId)
  // //console.log("userExpenses", userExpenses)
  // //console.log("userbalance", userbalance)
  const balance = userbalance[0].totalOwed - userbalance[0].totalPaid
  const owed = userbalance[0].totalOwed
  const paid = userbalance[0].totalPaid

  return (
    <div className="p-4 flex flex-col gap-8 justify-start pb-20">
      <div className="flex justify-between">
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
      </div>
      <ExpenseForm />
      <UserBalanceSection paid={paid} owed={owed} balance={balance} />
      <RecentExpensesSection userExpenses={userExpenses} />
      <RecentActivitySection />
    </div>
  )
}
