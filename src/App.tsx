import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import Home from "@/features/home"
import Rooms from "@/features/rooms"
import RoomDetail from "@/features/rooms/components/RoomDetail"
import About from "@/features/about"
import Contact from "@/features/contact"
import ScrollToTop from "@/utils/ScrollToTop"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  })

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/habitaciones" element={<Rooms />} />
          <Route path="/habitaciones/:slug" element={<RoomDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
