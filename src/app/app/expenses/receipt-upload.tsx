"use client"
import AlbumIcon from "@/assets/icons/album-icon"
import { Avatar, Image, Input } from "@nextui-org/react"
import React, { useState } from "react"

const UploadReceipt = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // //console.log("file uploaded")
    const selectedFile = e.target.files ? e.target.files[0] : null
    setFile(selectedFile)

    //TODO: transcribe receipt using gpt 4o
    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // //console.log(reader.result)
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
        // <Image
        //   alt="receipt"
        //   className="size-20 rounded-lg p-2 w-32"
        //   src={preview ? (preview as string) : <AlbumIcon />}
        //   fa
        // />
        <Image
          className="size-20 rounded-lg p-2"
          fallbackSrc={<AlbumIcon />}
          src={preview as string}
        />
      }
    />
  )
}

export default UploadReceipt
