import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { DotPattern } from "@/components/ui/dot-pattern"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 overflow-hidden z-20">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'contrast(1.18) saturate(1.12) brightness(1.02)' }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-bg.png"
      >
        {/* Local hero video */}
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/40 to-transparent pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center mt-12">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="col-span-12 md:col-span-5 text-dawn-50">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs tracking-widest uppercase mb-8 shadow-sm font-medium">
              Introducing AURA Ring 2
            </div>
            
            <h1 className="font-display text-[5.5rem] leading-[0.95] tracking-tight mb-8">
              Know yourself.<br />Master your life.
            </h1>
            
            <p className="text-lg opacity-80 leading-relaxed max-w-md mb-12">
              A microscopic health laboratory wrapped in aerospace-grade titanium, delivering absolute clarity on your sleep, stress, and recovery.
            </p>

            <div className="flex items-center gap-6">
              <a href="#about">
                <GlassButton size="lg">Explore AURA</GlassButton>
              </a>
              <a href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity">
                Watch the film
              </a>
            </div>
          </div>

          {/* Center Column (Empty for Ring) */}
          <div className="hidden md:block col-span-3"></div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-4">
            <LiquidGlassCard borderRadius="24px" className="aspect-[4/5] relative overflow-hidden group">
              <img 
                src="/assets/card-bg.jpg" 
                alt="Mountain sunrise"
                className="absolute inset-0 w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-ink-900/20" />
              <DotPattern />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-6 z-10">
                <h3 className="font-display text-4xl text-dawn-50">Closer to nature.</h3>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-ink-900 bg-pewter-400" />
                    ))}
                  </div>
                  <span className="text-dawn-50 text-sm opacity-80">+ 50k wearing AURA</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#F0A858] text-xl tracking-widest">★★★★★</div>
                  <span className="text-dawn-50 font-medium ml-2">4.9</span>
                </div>

                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-dawn-50 opacity-60 pt-4 border-t border-white/20">
                  <span>Ships in 14 days</span>
                  <span>Free worldwide</span>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
          
        </div>
      </div>
    </section>
  )
}
