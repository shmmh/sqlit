import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/(Root)/globals.css"
import { Providers } from "./../providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

import { AppNav } from "./(components)/appnav"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " dark"}>
        <Providers>
          <AppNav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
