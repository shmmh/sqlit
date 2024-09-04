"use client"
import { createGroup, userExist } from "@/actions/friends"
import { auth } from "@/lib/auth"
import { getUserFriendsById } from "@/lib/db/user_crud"
import {
  Button,
  Chip,
  Input,
  Select,
  SelectedItems,
  SelectItem,
  User,
} from "@nextui-org/react"
import { MouseEventHandler, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"

const initialState = {
  message: "",
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      color="primary"
      aria-disabled={pending}
      disabled={pending}
    >
      Create Group
    </Button>
  )
}

type User = {
  id: string
  name: string
  email: string
  password: string
  username: string
  email_verified: boolean
  created_at: Date
  updated_at: Date
}
const AddGroup = ({
  userId,
  userFriends,
}: {
  userId: string
  userFriends: any[]
}) => {
  const [state, formAction] = useFormState(createGroup, initialState)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedUsers, setSelectedUsers] = useState([""])

  //get user friends
  if (!userId) throw new Error("UserId is null")
  return (
    <form
      action={(formdata: FormData) => {
        formAction(formdata)
        setName("")
        setDescription("")
        setSelectedUsers([""])
      }}
    >
      {state?.message ? (
        <span className="text-red-600">{state.message}</span>
      ) : null}
      <Input
        name="name"
        type="text"
        placeholder="Enter Name"
        isClearable
        value={name}
        required
        onValueChange={(val) => setName(val)}
      />
      <Input
        name="description"
        type="text"
        placeholder="Enter description for the group"
        isClearable
        value={description}
        onValueChange={(val) => setDescription(val)}
      />
      <Select
        selectionMode="multiple"
        onSelectionChange={(users) => {
          const memberIds = Array.from(users).map((user) => user.toString())
          setSelectedUsers(memberIds)
        }}
        renderValue={(items: SelectedItems<any>) => {
          return (
            <div className="flex flex-wrap gap-2">
              {items.map((item) => {
                const userdataString = item["aria-label"]
                const user = JSON.parse(userdataString as string)
                return <Chip key={item.key}>{`${user.friend.name}`}</Chip>
              })}
            </div>
          )
        }}
      >
        {userFriends.map((user) => {
          return (
            <SelectItem key={user.friendId} aria-label={JSON.stringify(user)}>
              <User
                name={user.friend.name}
                description={`${user.friend.username} | ${user.friend.email}`}
              />
            </SelectItem>
          )
        })}
      </Select>
      <input type="hidden" name="userId" value={userId} />
      <input
        type="hidden"
        name="friends"
        value={JSON.stringify(selectedUsers)}
      />
      <SubmitButton />
    </form>
  )
}

export default AddGroup
