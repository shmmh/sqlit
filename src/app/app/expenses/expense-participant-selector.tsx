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

const ExpenseParticipantsSelect = ({
  userFriends,
}: {
  userFriends: UserFriends[]
}) => {
  // const friends = mockUsers
  const friends = userFriends
  console.log("friends", friends)
  const [participants, selectParticipants] = React.useState<Set<string>>(
    new Set([""])
  )
  const [groupSelected, setGroupSelected] = React.useState<string>()
  //TODO get friends from db and groups
  // Show empty listbox with a button to add a user
  const selectedFriends = React.useMemo(() => {
    let selectedValues = Array.from(participants as Set<string>)
    const selectedParticipants = friends.filter((user) =>
      new Set(selectedValues).has(user.friendId)
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
              key={user.friendId}
              content={0}
              color="primary"
              showOutline={false}
            >
              <CustomRadio
                value={user.friendId}
                key={user.friendId}
                name={user.friend.name}
                size="lg"
              >
                <Avatar name={user.friend.name} size="lg" />
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
                  <ListboxItem key={user.friendId}>
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={user.friend.name}
                        className="flex-shrink-0"
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{user.friend.name}</span>
                        <span className="text-tiny text-default-400">
                          {user.friend.email}
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
