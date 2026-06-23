import AnnouncementBar from "@/components/AnnouncementBar"
import Nav from "@/components/Nav"
import ScrollScene from "@/components/ScrollScene"
import Hero from "@/components/sections/Hero"
import PressStrip from "@/components/sections/PressStrip"
import About from "@/components/sections/About"
import Benefits from "@/components/sections/Benefits"
import CompanionApp from "@/components/sections/CompanionApp"
import Unboxing from "@/components/sections/Unboxing"
import BuyNow from "@/components/sections/BuyNow"
import Testimonials from "@/components/sections/Testimonials"
import PremiumBanner from "@/components/sections/PremiumBanner"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative bg-dawn-50">
      <AnnouncementBar />
      <Nav />
      <ScrollScene />
      
      <Hero />
      <PressStrip />
      <About />
      <Benefits />
      <CompanionApp />
      <Unboxing />
      <BuyNow />
      <Testimonials />
      <PremiumBanner />
      
      <Footer />
    </main>
  )
}
