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
export const RecentBillingSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Recent Expenses</h2>

      <div className="w-full flex gap-2 flex-row overflow-x-auto">
        <UserBillCard
          name="restraunt name"
          participants={[{ name: "friend 1", image: "image/f1.png" }]}
          amount={100}
        />
        <UserBillCard
          name="restraunt name"
          participants={[{ name: "friend 1", image: "image/f1.png" }]}
          amount={100}
        />
      </div>
    </div>
  )
}

const UserBillCard = (props: {
  name: string
  amount: number
  participants: any
}) => {
  return (
    <div className="w-auto h-auto flex gap-2 flex-col">
      <Card classNames={{ base: "p-2" }} radius="md">
        <CardHeader>
          <div className="flex flex-row justify-between w-full">
            <h3>Restraunt</h3>
            <ShareIcon className="size-5" />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex items-center justify-center p-2">
          <div className="flex flex-row justify-between w-full gap-2">
            <span className="text-md pr-4 font-semibold block align-center">
              Total Bill
            </span>
            <span className="text-2xl font-bold block">$200</span>
          </div>
          <div className="flex flex-row justify-between w-full gap-2 mt-2">
            <span className="text-xs opacity-55 pr-4 font-semibold block align-center">
              Split with
            </span>
            <span className="text-xs opacity-50 font-bold block">4 people</span>
          </div>
        </CardBody>
        <CardFooter className="p-0">
          <Button variant="solid" className="w-full p-0">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
