export default function PremiumBanner() {
  return (
    <section id="premium-banner" className="relative h-[80vh] flex items-center justify-center overflow-hidden z-20">
      <img 
        src="https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&q=80&w=2000" 
        alt="Dusk Granite Peak" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-ink-900/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900" />
      
      <div className="relative z-10 text-[25vw] font-display font-bold leading-none tracking-widest text-dawn-50/10 mix-blend-overlay select-none">
        AURA
      </div>
    </section>
  )
}
