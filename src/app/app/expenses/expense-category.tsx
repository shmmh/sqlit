"use client"
import { Input, Select, SelectItem } from "@nextui-org/react"
import React from "react"

const ExpenseCategorySelect = ({ categories }: { categories: any[] }) => {
  const [selectedCategory, setValues] = React.useState("")

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setValues(selectedValue)
  }
  return (
    <>
      <Select placeholder="Select a Category" onChange={handleSelectionChange}>
        {categories.map((item) => {
          return (
            <SelectItem textValue={item} key={item}>
              {item}
            </SelectItem>
          )
        })}
      </Select>
      <Input
        type="hidden"
        id="category"
        name="category"
        value={selectedCategory}
      />
    </>
  )
}

export default ExpenseCategorySelect
