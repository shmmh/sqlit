"use client"
import {
  Avatar,
  Badge,
  Button,
  Chip,
  Listbox,
  ListboxItem,
  ScrollShadow,
  Select,
  SelectedItems,
  SelectItem,
} from "@nextui-org/react"
import { Plus } from "lucide-react"
import React from "react"

function PlusIcon() {
  return (
    <div>
      <Plus />
    </div>
  )
}
type User = {
  id: number
  name: string
  role: string
  team: string
  status: string
  age: string
  avatar: string
  email: string
}
const ExpenseParticipants = ({ participants }: { participants: any[] }) => {
  return (
    <>
      {/* <label>Participants</label> */}
      <div className="flex flex-row gap-2 w-full items-center justify-start">
        {/* <Badge content="5" color="primary">
          <Avatar
            radius="full"
            size="lg"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
        <Badge content="2" color="primary">
          <Avatar
            radius="full"
            size="lg"
            src="https://i.pravatar.cc/300?u=a042581f4829026709d"
          />
        </Badge>
        <Button isIconOnly>
          <Badge content="0" color="primary">
            <Avatar radius="full" size="lg" name="+" />
          </Badge>
        </Button> */}
        <Select
          items={participants}
          label="Participants"
          isMultiline={true}
          selectionMode="multiple"
          placeholder="Select your friends"
          labelPlacement="outside"
          classNames={{
            base: "w-full",
            mainWrapper: "flex flex-col gap-y-2",
            trigger: "py-2",
          }}
          renderValue={(items: SelectedItems<User>) => {
            return (
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  // <Chip key={item.key}>{item.data?.name}</Chip>
                  <Avatar
                    key={item.key}
                    radius="full"
                    size="lg"
                    name="+"
                    src={item.data?.avatar}
                  />
                ))}
              </div>
            )
          }}
        >
          {(user) => (
            <SelectItem key={user.id} textValue={user.name}>
              <div className="flex gap-2 items-center">
                <Avatar
                  alt={user.name}
                  className="flex-shrink-0"
                  size="sm"
                  src={user.avatar}
                />
                <div className="flex flex-col">
                  <span className="text-small">{user.name}</span>
                  <span className="text-tiny text-default-400">
                    {user.email}
                  </span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
    </>
  )
}

export default ExpenseParticipants
