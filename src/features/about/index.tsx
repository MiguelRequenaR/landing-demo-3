import CallToActionMap from "@/components/CallToActionMap";
import AboutSection from "./components/AboutSection";
import GalleryAbout from "./components/GalleryAbout";
import AboutStats from "./components/AboutStats";

export default function index() {
  return (
    <main>
      <AboutSection />
      <GalleryAbout />
      <AboutStats />
      <CallToActionMap />
    </main>
  )
}
