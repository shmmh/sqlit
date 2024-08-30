"use client"

import React from "react"
import { Tabs, Tab } from "@nextui-org/react"
import { Link } from "next-view-transitions"
import {
  HomeIcon,
  UserIcon,
  UserGroupIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid"

export const AppNav = () => {
  return (
    <nav className="flex w-full max-w-7xl flex-cols fixed bottom-0 left-0 right-0 h-16 z-40 mx-auto">
      <Tabs
        aria-label="Options"
        color="primary"
        classNames={{
          base: "flex w-full flex-col mx-auto",
          tabList: "rounded-none",
        }}
        radius="lg"
      >
        <Tab
          key="dashboard"
          title={
            <Link
              href="/app/dashboard"
              className="flex flex-col items-center gap-2"
            >
              <HomeIcon className="size-6" />
              <span>Home</span>
            </Link>
          }
          className="h-auto"
        />
        <Tab
          key="expenses"
          title={
            <Link
              href="/app/expenses"
              className="flex flex-col items-center gap-2"
            >
              <BanknotesIcon className="size-6" />
              <span>Expenses</span>
            </Link>
          }
          className="h-auto"
        />
        <Tab
          key="friends"
          title={
            <div className="flex flex-col items-center gap-2">
              <UserGroupIcon className="size-6" />
              <span>Friends</span>
            </div>
          }
          className="h-auto"
        />
        <Tab
          key="user"
          title={
            <div className="flex flex-col items-center gap-2">
              <UserIcon className="size-6" />
              <span>User</span>
            </div>
          }
          className="h-auto"
        />
      </Tabs>
    </nav>
  )
}
