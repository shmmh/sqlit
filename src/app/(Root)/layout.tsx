import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./../providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SessionProvider } from "next-auth/react"
import { auth } from "@/lib/auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <SessionProvider session={session}>{children}</SessionProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
