"use client"
import { Header } from "@/components/layout/header";
import { DogsSection } from "@/components/layout/dogsSection";
import { HeroSection } from "@/components/layout/heroSection";
export default function Page() {

  return (
    <div className="relative">
      <Header/>
      <HeroSection/>
      <DogsSection/>
    </div>
  )
}