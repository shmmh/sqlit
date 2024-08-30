import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ShareIcon,
} from "@heroicons/react/24/solid"
import { Button, Divider, User } from "@nextui-org/react"
import CollapsibleComponent from "../../(components)/user-expense-details"
import UserExpenseDetails from "../../(components)/user-expense-details"

const ExpensesDetailsPage = ({ params }: { params: { expenseId: string } }) => {
  const expenseId = params.expenseId
  return (
    <div className="p-4 min-h-screen pb-16 pt-64">
      <div className="flex flex-col justify-between w-full expense-123 flex-grow pb-16 gap-2">
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-row flex-start gap-4">
            <div className="[view-transition-name:abc]w-24 h-24 rounded-full bg-red-500"></div>
            <div className="flex flex-col">
              <div className="restraunt-name font-semibold">Restraunt 1</div>
              <span>10 Dec 2024 | 19:30</span>
            </div>
          </div>
          <ShareIcon className="size-6"></ShareIcon>
        </div>
        <div className="flex flex-row justify-between w-full gap-2">
          <span className="text-md pr-4 font-semibold block align-center">
            Total Bill
          </span>
          <span className="text-2xl font-bold block">$200</span>
        </div>
        <div className="flex flex-row justify-between w-full gap-2 mt-2">
          <span className="text-xs opacity-55 pr-4 font-semibold block align-center">
            10 Participants
          </span>
          <span className="text-xs opacity-50 font-bold block">
            Avatar of Friends
          </span>
        </div>
      </div>
      <ExpenseDetails />
    </div>
  )
}

const ExpenseDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3>Expense Details</h3>
      <div className="expense-details-users flex flex-col gap-4">
        <UserSplitDetails />
      </div>
    </div>
  )
}

const UserSplitDetails = () => {
  const user_items = [
    { id: 1, name: "Item 1", qty: 1, amount: 100 },
    { id: 2, name: "Item 2", qty: 1, amount: 20 },
  ]

  return (
    <div className="flex flex-col gap-2">
      <UserExpenseDetails />
    </div>
  )
}

interface UserItems {
  name: string
  qty: number
  amount: number
  id: number
}
const Price = ({ amount }: { amount: number }) => {
  return <span>${amount}</span>
}
const UserItems: any = ({ items }: { items: UserItems[] }) => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      {items.map((item) => (
        <div key={item.id} className="flex flex-row justify-between w-full">
          <span className="text-md pr-4 font-semibold block align-center">
            {item.name}
          </span>
          <div className="flex flex-row gap-2">
            <span className="text-lg font-bold block w-20 text-right">
              x{item.qty}
            </span>
            <span className="text-xl font-bold block w-20 text-right">
              ${item.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ExpensesDetailsPage
