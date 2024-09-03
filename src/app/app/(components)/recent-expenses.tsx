import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react"
import { ShareIcon } from "@heroicons/react/24/solid"
import { expenses } from "@/lib/schema"
import { Link } from "next-view-transitions"

export const RecentExpensesSection = ({
  userExpenses,
}: {
  userExpenses: any[]
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Recent Expenses</h2>

      <div className="w-full flex gap-2 flex-row overflow-x-auto">
        {userExpenses.map((expense) => {
          return (
            <UserBillCard
              key={expense.id}
              id={expense.id}
              name={expense.name}
              participants={expense.participants}
              amount={expense.total_amount.toString()}
            />
          )
        })}
      </div>
    </div>
  )
}

const UserBillCard = (props: {
  id: string
  name: string
  amount: string
  participants: { id: string; percentage: string | null }[]
}) => {
  return (
    <div className="w-auto h-auto flex gap-2 flex-col blue-finance">
      <Card classNames={{ base: "p-2" }} radius="md">
        <CardHeader>
          <div className="flex flex-row justify-between w-full">
            <h3>{props.name}</h3>
            <ShareIcon className="size-5" />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex items-center justify-center p-2">
          <div className="flex flex-row justify-between w-full gap-2">
            <span className="text-md pr-4 font-semibold block align-center">
              Total Bill
            </span>
            <span className="text-2xl font-bold block">${props.amount}</span>
          </div>
          <div className="flex flex-row justify-between w-full gap-2 mt-2">
            <span className="text-xs opacity-55 pr-4 font-semibold block align-center">
              Split with
            </span>
            <span className="text-xs opacity-50 font-bold block">
              {props.participants.length > 0
                ? `${props.participants.length} people`
                : `No one`}
            </span>
          </div>
        </CardBody>
        <CardFooter className="p-0">
          <Button variant="solid" color="primary" className="w-full p-0">
            <Link href={`/app/expenses/${props.id}`} className="w-full">
              View Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
