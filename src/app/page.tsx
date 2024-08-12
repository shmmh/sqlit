import React from "react"
import { DatePicker } from "@nextui-org/react"

import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="flex w-full h-full flex-wrap md:flex-nowrap gap-4">
      <DatePicker label="Birth date" className="max-w-[284px]" isRequired />
      <Button>Hello</Button>
    </div>
  )
}
