import Link from "next/link"
import { Card } from "@nextui-org/react"
import { Keyfeatures } from "./components/keyfeatures"
import { HeroSection } from "./components/herosection"
import { Testimonials } from "./components/testimonails"
import { CallToAction } from "./components/cts"

export default function App() {
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
