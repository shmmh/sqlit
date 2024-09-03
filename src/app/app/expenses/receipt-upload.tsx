"use client"
import { Avatar, Input } from "@nextui-org/react"
import Image from "next/image"
import React, { useState } from "react"

const UploadReceipt = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("file uploaded")
    const selectedFile = e.target.files ? e.target.files[0] : null
    setFile(selectedFile)

    //TODO: transcribe receipt using gpt 4o
    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        console.log(reader.result)
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }

  return (
    <Input
      type="file"
      name="receipt"
      multiple={false}
      placeholder="Upload a receipt"
      onChange={onFileChange}
      classNames={{ inputWrapper: "h-20" }}
      startContent={
        <img
          alt="receipt"
          className="size-20 rounded-lg p-2 w-32"
          src={preview as string}
        />
      }
    />
  )
}

export default UploadReceipt
