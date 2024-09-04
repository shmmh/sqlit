"use client"
import { createFriend, userExist } from "@/actions/friends"
import { auth } from "@/lib/auth"
import { Button, Input } from "@nextui-org/react"
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
      Add Friend
    </Button>
  )
}

const AddFriend = ({ userId }: { userId: string }) => {
  const [state, formAction] = useFormState(createFriend, initialState)
  const [input, setInput] = useState("")

  if (!userId) throw new Error("UserId is null")
  return (
    <form
      action={(formdata: FormData) => {
        formAction(formdata)
        setInput("")
      }}
    >
      {state?.message ? (
        <span className="text-red-600">{state.message}</span>
      ) : null}
      <Input
        name="identifier"
        type="text"
        placeholder="Enter username or email"
        isClearable
        value={input}
        onValueChange={(val) => setInput(val)}
        onSubmit={() => setInput("")}
      />
      <input type="hidden" name="userId" value={userId} />
      <SubmitButton />
    </form>
  )
}

export default AddFriend
