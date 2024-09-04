"use client"
import React from "react"
import {
  Avatar,
  Badge,
  CheckboxGroup,
  Listbox,
  ListboxItem,
  ListboxSection,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  UserSlots,
} from "@nextui-org/react"
import { mockUsers } from "@/lib/mockData"
import { CustomRadio } from "./friend-select"

const ExpenseParticipantsSelect = () => {
  const friends = mockUsers
  const [participants, selectParticipants] = React.useState<Set<string>>(
    new Set([""])
  )
  const [groupSelected, setGroupSelected] = React.useState<string>()
  //TODO get friends from db and groups
  // Show empty listbox with a button to add a user
  const selectedFriends: typeof mockUsers = React.useMemo(() => {
    let selectedValues = Array.from(participants as Set<string>)
    const selectedParticipants = friends.filter((user) =>
      new Set(selectedValues).has(user.id)
    )
    // //console.log(selectedParticipants)
    return selectedParticipants
  }, [participants])

  return (
    <div>
      <RadioGroup
        orientation="horizontal"
        value={groupSelected as string}
        onChange={() => {
          // //console.log(groupSelected)
        }}
      >
        {selectedFriends.map((user) => {
          return (
            <Badge
              key={user.id}
              content={0}
              color="primary"
              showOutline={false}
            >
              <CustomRadio
                value={user.id}
                key={user.id}
                name={user.name}
                size="lg"
              >
                <Avatar name={user.name} size="lg" />
              </CustomRadio>
            </Badge>
          )
        })}
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Avatar name="+" size="lg" />
          </PopoverTrigger>
          <PopoverContent>
            <Listbox
              selectionMode="multiple"
              selectedKeys={participants}
              onSelectionChange={(keys) => {
                //console.log(keys)

                return selectParticipants(keys as Set<string>)
              }}
            >
              {friends.map((user) => {
                return (
                  <ListboxItem key={user.id}>
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={user.name}
                        className="flex-shrink-0"
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{user.name}</span>
                        <span className="text-tiny text-default-400">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </ListboxItem>
                )
              })}
            </Listbox>
          </PopoverContent>
        </Popover>
      </RadioGroup>
    </div>
  )
}

export default ExpenseParticipantsSelect
