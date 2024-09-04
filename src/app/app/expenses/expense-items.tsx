"use client"
import React, { Key, useEffect, useState } from "react"
import { useAsyncList } from "@react-stately/data"
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react"
import { mockExpenseParticipants } from "@/lib/mockData"

const ExpenseItems = ({ items }: { items: Items[] }) => {
  const [value, setValue] = useState<React.Key>("")
  const [filterText, setFilterText] = useState<string>("")
  const [debouncedFilterText, setDebouncedFilterText] = useState<string>("")
  const [itemsAdded, setItemsAdded] = useState<Items[]>([])

  useEffect(() => {})

  // Debounce the filterText
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilterText(filterText)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [filterText])

  let list = useAsyncList<Items>({
    async load({ signal, filterText }) {
      const url = `/api/items/?search=${filterText}`
      let res = await fetch(url, { signal })
      let json = await res.json()
      if (json.length > 0) {
        return {
          items: json,
        }
      }
      return {
        items: [],
      }
    },
  })

  // Fetch items based on debouncedFilterText
  useEffect(() => {
    list.setFilterText(debouncedFilterText)
  }, [debouncedFilterText])

  const mockItemParticipants = mockExpenseParticipants
  const [itemParticipants, setItemParticipants] =
    React.useState<itemParticipants>(mockItemParticipants)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <span>Items</span>
      <div className="item-add">
        {/* <Autocomplete
          inputValue={filterText}
          isLoading={list.isLoading}
          items={list.items}
          onInputChange={(val) => setFilterText(val)}
          selectedKey={value as string}
          onSelectionChange={async (key) => {
            console.log(key)
            const itemId = key as string
            setValue(itemId)
            const selectedItem = list.items.filter((val) => val.id === itemId)
            setItemsAdded((prev) => {
              const existingItemIds = new Set(prev.map((item) => item.id))
              if (
                selectedItem.length > 0 &&
                existingItemIds.has(selectedItem[0].id)
              ) {
                return [...prev]
              }
              const uniqueNewItems = selectedItem.filter(
                (item) => !existingItemIds.has(item.id)
              )
              return [...prev, ...uniqueNewItems]
            })
          }}
          label="Items"
          placeholder="Look for an item"
        >
          {(item) => (
            <AutocompleteItem key={item.id}>
              {item.name.toString()}
            </AutocompleteItem>
          )}
        </Autocomplete> */}
      </div>
      {/* {items.map((item) => {
        return (
          <div key={item.id} className="flex gap-x-4">
            <Select
              className="w-24"
              key={item.id}
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
                return (
                  <Avatar key={participant.id} name={participant.user_id} />
                )
              })}
            </AvatarGroup>
          </div>
        )
      })} */}
      {itemsAdded.length > 0 ? (
        itemsAdded.map((item) => {
          return (
            <pre key={item.id}>
              name {item.name} {JSON.stringify(item)}
            </pre>
          )
        })
      ) : (
        <Card className="w-full flex items-center justify-center h-32">
          <CardBody className="justify-center items-center flex flex-col">
            <Button color="primary" fullWidth={false} onPress={onOpen}>
              Add Item
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Add New Item
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        autoFocus
                        label="Name"
                        placeholder="Enter name of the Item"
                        variant="bordered"
                      />
                      <Input
                        label="Quantity"
                        type="number"
                        placeholder="Enter the quantity the Item"
                        variant="bordered"
                      />
                      <Input
                        label="Price"
                        placeholder="Enter the price of the item"
                        type="number"
                        variant="bordered"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Add Item
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default ExpenseItems
