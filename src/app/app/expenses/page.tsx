import { calculateUserBalances, getUserExpensesById } from "@/lib/db/user_crud"
import { RecentExpensesSection } from "../(components)/recent-expenses"
import ExpenseForm from "./expense-form"
import { auth } from "@/lib/auth"

export default async function Expenses() {
  const userId = (await auth().then((session) => session?.user.id)) as string

  const userExpenses = await getUserExpensesById(userId)
  return (
    <div>
      <ExpenseForm />
      <RecentExpensesSection userExpenses={userExpenses} />
    </div>
  )
}
