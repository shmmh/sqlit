import { BeakerIcon } from "@heroicons/react/24/solid"
import { Card, CardHeader, CardBody, CardFooter, User } from "@nextui-org/react"
import Link from "next/link"
import { UserBalanceSection } from "../(components)/user-balance"
import { RecentBillingSection } from "../(components)/recent-billing"
import { RecentActivitySection } from "../(components)/recent-activity"

export default function Dashboard() {
  return (
    <div className="p-4 flex flex-col gap-8 justify-start">
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
      <UserBalanceSection />
      <RecentBillingSection />
      <RecentActivitySection />
    </div>
  )
}
