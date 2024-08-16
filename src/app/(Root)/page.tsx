import Link from "next/link"
import { Card } from "@nextui-org/react"
import { Keyfeatures } from "./components/keyfeatures"
import { HeroSection } from "./components/herosection"
import { Testimonials } from "./components/testimonails"
import { CallToAction } from "./components/cts"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full max-w-7xl justify-center align-middle mx-auto">
      <main className="flex-1">
        <HeroSection />
        <Keyfeatures />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  )
}

export function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
