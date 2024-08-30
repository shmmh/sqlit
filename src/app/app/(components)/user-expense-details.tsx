"use client"

import React from "react"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"
import {
  ArrowDownCircleIcon,
  ArrowLeftCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid"

export default function UserExpenseDetails() {
  const user_items = [
    { id: 1, name: "Item 1", qty: 1, amount: 100 },
    { id: 2, name: "Item 2", qty: 1, amount: 20 },
  ]

  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <Avatar
            color="primary"
            radius="full"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        }
        subtitle={<Price amount={200} />}
        indicator={({ isOpen }) =>
          isOpen ? (
            <ArrowLeftCircleIcon className="size-6" />
          ) : (
            <ArrowUpCircleIcon className="size-6" />
          )
        }
        classNames={{
          base: "justify-start",
          subtitle: "text-lg font-bold text-black dark:text-white",
        }}
        title="Chung Miller"
      >
        {user_items.map((item) => {
          return <UserItems key={item.id} items={user_items} />
        })}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Chung Miller"
        startContent={
          <Avatar
            color="primary"
            radius="full"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        }
        subtitle={<Price amount={200} />}
        indicator={({ isOpen }) =>
          isOpen ? (
            <ArrowLeftCircleIcon className="size-6" />
          ) : (
            <ArrowUpCircleIcon className="size-6" />
          )
        }
        classNames={{
          base: "justify-start",
          subtitle: "text-lg font-bold text-black dark:text-white",
        }}
        title="Chung Miller"
      >
        {user_items.map((item) => {
          return <UserItems key={item.id} items={user_items} />
        })}
      </AccordionItem>
    </Accordion>
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
