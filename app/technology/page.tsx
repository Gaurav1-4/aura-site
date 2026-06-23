import AnnouncementBar from "@/components/AnnouncementBar"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function TechnologyPage() {
  return (
    <main className="relative bg-dawn-50 min-h-screen flex flex-col pt-32">
      <AnnouncementBar />
      <Nav />
      <div className="max-w-4xl flex-1 mx-auto px-8 py-24 text-center">
        <h1 className="display-1 mb-6 text-ink-900 mt-12">Technology</h1>
        <p className="text-xl text-pewter-500">Chip, sensors, battery, materials, durability, and certs.</p>
      </div>
      <Footer />
    </main>
  )
}
