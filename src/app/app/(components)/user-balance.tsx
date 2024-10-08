import { Card, CardBody, CardHeader } from "@nextui-org/react"

export const UserBalanceSection = ({
  balance,
  owed,
  paid,
}: {
  balance: number
  owed: number
  paid: number
}) => {
  return (
    <div className="grid w-full grid-cols-3 sm:grid-cols-3 items-center justify-center gap-2">
      <UserBalanceCard title="Balance" amount={balance}></UserBalanceCard>
      <UserBalanceCard title="You Owe" amount={paid}></UserBalanceCard>
      <UserBalanceCard title="You Get" amount={owed}></UserBalanceCard>
    </div>
  )
}

const UserBalanceCard = (props: { title: string; amount: number }) => {
  const { title, amount } = props
  return (
    <Card
      classNames={{
        header: "p-2 mb-0",
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

export default UserBalanceSection
