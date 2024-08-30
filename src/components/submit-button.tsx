"use client"

import { Button, Spinner } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()

  return (
    <Button
      type={pending ? "button" : "submit"}
      aria-disabled={pending}
      disabled={pending}
      color="primary"
      className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
    >
      {children}
      {pending && (
        <svg
          className="animate-spin ml-2 h-4 w-4 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      <span aria-live="polite" className="sr-only" role="status">
        <Spinner />
        {pending ? "Loading" : "Submit form"}
      </span>
    </Button>
  )
}
