"use client"
import React from "react"
import { items, expenseParticipants } from "@/lib/schema"
import { Avatar, AvatarGroup, Select, SelectItem } from "@nextui-org/react"
import { mockExpenseParticipants } from "@/lib/mockData"

type Items = typeof items.$inferSelect
type itemParticipants = (typeof expenseParticipants.$inferSelect)[]
const ExpenseItems = ({ items }: { items: Items[] }) => {
  const mockItemParticipants = mockExpenseParticipants
  const [itemParticipants, setItemParticipants] =
    React.useState<itemParticipants>(mockItemParticipants)
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id} className="flex gap-x-4">
            <Select
              className="w-24"
              defaultSelectedKeys={[item.quantity.toString()]}
              items={Array.from({ length: 10 }, (_, index) => {
                return {
                  key: index + 1,
                  value: index + 1,
                }
              })}
            >
              {(item) => {
                return (
                  <SelectItem key={item.key}>
                    {item.value.toString()}
                  </SelectItem>
                )
              }}
            </Select>
            <span className="w-full">{item.name}</span>
            <span className="w-16 text-right">
              ${item.price * item.quantity}
            </span>
            <AvatarGroup>
              {itemParticipants.map((participant) => {
                return <Avatar name={participant.user_id} />
              })}
            </AvatarGroup>
          </div>
        )
      })}
    </div>
  )
}

export default ExpenseItems
