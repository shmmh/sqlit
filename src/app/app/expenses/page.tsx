import { calculateUserBalances, getUserExpensesById } from "@/lib/db/user_crud"
import { RecentExpensesSection } from "../(components)/recent-expenses"
import ExpenseForm from "./expense-form"

export default async function Expenses() {
  const userId = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p"

  const userExpenses = await getUserExpensesById(userId)
  return (
    <div>
      <ExpenseForm />
      <RecentExpensesSection userExpenses={userExpenses} />
    </div>
  )
}
