import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"

export default function BuyNow() {
  return (
    <section id="buy" className="relative h-screen bg-dawn-50 z-20 flex flex-col justify-between items-center pt-32 pb-12 overflow-hidden">
      <h2 className="display-1 text-ink-900 z-10 mt-12">Quietly extraordinary.</h2>
      
      <div className="relative w-full flex-1 pointer-events-none">
        {/* Ring stays dead still here via GSAP */}
      </div>

      <div className="flex flex-col items-center z-10 gap-6 mt-auto">
        <LiquidGlassCard borderRadius="100px" className="flex items-center p-2 pr-2 pl-8 gap-8 hover:scale-[1.02] transition-transform cursor-pointer bg-white/60 shadow-md">
          <span className="font-display text-2xl font-medium text-ink-900">$349</span>
          <div className="bg-ink-900 text-dawn-50 px-6 py-3 rounded-full text-sm font-medium tracking-wide">
            Buy AURA -&gt;
          </div>
        </LiquidGlassCard>
        
        <div className="text-[10px] tracking-widest uppercase font-bold text-pewter-400">
          Free shipping . 30-day trial . 2-year warranty
        </div>
      </div>
    </section>
  )
}
