import { BeakerIcon } from "@heroicons/react/24/solid"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"

export default function Dashboard() {
  return (
    <div className="p-2">
      <UserBalanceSection />
      <RecentBillingSection />
      <RecentActivitySection />
    </div>
  )
}

const UserBalanceSection = () => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2">
      Hi, User
      <UserBalanceCard title="Account Balance" amount={100}></UserBalanceCard>
      <UserBalanceCard title="You Owe" amount={100}></UserBalanceCard>
      <UserBalanceCard title="You Get" amount={100}></UserBalanceCard>
    </div>
  )
}

const UserBalanceCard = (props: { title: string; amount: number }) => {
  const { title, amount } = props
  return (
    <Card
      classNames={{
        header: "p-2",
        body: "p-2",
      }}
    >
      <CardHeader>
        <h4 className="text-sm w-full text-center">{title}</h4>
      </CardHeader>
      <CardBody>
        <p className="text-3xl font-bold w-full text-center">{"$ " + amount}</p>
      </CardBody>
    </Card>
  )
}

const RecentBillingSection = () => {
  return (
    <div>
      <h1>Recent Billing</h1>
      <p>Recent Billing</p>
    </div>
  )
}

const RecentActivitySection = () => {
  return (
    <div>
      <h1>Recent Activity</h1>
      <p>Recent Activity</p>
    </div>
  )
}
