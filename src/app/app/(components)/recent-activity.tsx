import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react"

export const RecentActivitySection = () => {
  const isLoading = false
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Recent Activity</h2>

      <div className="w-full flex gap-2 flex-col">
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
      </div>
    </div>
  )
}

const RecentActivity = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row-flex-start gap-4">
        <div className="w-14 h-14 rounded-full bg-red-500"></div>
        <div className="flex flex-col">
          <div className="restraunt-name font-semibold">Restraunt 1</div>
          <span>10 Dec 2024 | 19:30</span>
        </div>
      </div>
      <h3 className="font-bold text-xl">$200</h3>
    </div>
  )
}
