import HeroHome from "@/features/home/components/HeroHome"
import AboutHome from "@/features/home/components/AboutHome"
import RoomsHome from "@/features/home/components/RoomsHome"
import TestimonyHome from "@/features/home/components/TestimonyHome"

export default function index() {
  return (
    <main>
      <HeroHome />
      <AboutHome />
      <RoomsHome />
      <TestimonyHome />
    </main>
  )
}
