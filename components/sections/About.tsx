export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 flex items-center bg-dawn-50 z-20">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <div className="text-xs tracking-widest uppercase font-medium text-pewter-400 mb-6">Design Philosophy</div>
          <h2 className="display-2 mb-8 text-ink-900 leading-[1.1]">Invisible technology.<br />Absolute precision.</h2>
          <p className="text-lg text-pewter-500 leading-relaxed max-w-md mb-12">
            We believe the most powerful technology is the kind you forget you're wearing. AURA packs research-grade temperature, blood oxygen, and heart rate sensors into a seamless band of aerospace-grade titanium. It weighs less than a penny, yet it understands you better than a laboratory.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-pewter-200 pt-8">
            <div>
              <div className="text-2xl font-display text-ink-900 mb-2">Titanium</div>
              <div className="text-sm text-pewter-500">Aerospace-grade outer shell for supreme durability.</div>
            </div>
            <div>
              <div className="text-2xl font-display text-ink-900 mb-2">2.4g</div>
              <div className="text-sm text-pewter-500">Impossibly light, designed for 24/7 continuous wear.</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 relative min-h-[500px] pointer-events-none">
          {/* Ring will drift into this space via GSAP from ScrollScene */}
        </div>
      </div>
    </section>
  )
}
