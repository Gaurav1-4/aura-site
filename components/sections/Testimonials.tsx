import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"

export default function Testimonials() {
  const reviews = [
    {
      location: "KYOTO, JAPAN",
      quote: "It is the only thing on me that I forget I am wearing. The recovery score has rebuilt how I plan training weeks.",
      name: "Kenji Tanaka",
      role: "ULTRA-MARATHONER",
      img: "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=400&q=80"
    },
    {
      location: "LONDON, UK",
      quote: "I sleep better now because AURA is honest with me in the morning. No theatrics, just a number that turns out to be right.",
      name: "Priya Nair",
      role: "CHIEF OPERATING OFFICER",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      location: "UTRECHT, NL",
      quote: "The stress check caught a bad week before I noticed it. That alone earned its place on my hand.",
      name: "Henrik Aalbers",
      role: "SURGEON, RETIRED",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ];

  return (
    <section id="testimonials" className="relative pt-56 pb-32 bg-ink-950 z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-widest uppercase mb-8 font-medium text-pewter-400">
            WORN BY
          </div>
          <h2 
            className="text-dawn-50 tracking-tight leading-[1.05] max-w-3xl mb-6 font-display" 
            style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontFeatureSettings: '"liga","calt","dlig"' }}
          >
            People who notice the quiet things.
          </h2>
          <p className="text-lg text-pewter-500 leading-relaxed max-w-xl">
            Real wearers, real wrists. The kind of people who know the difference between a number that sounds right and one that is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <LiquidGlassCard key={i} borderRadius="24px" className="flex flex-col h-full bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-colors duration-500">
              <div className="p-8 md:p-10 flex flex-col flex-1 relative">
                <div className="text-6xl font-display text-white/10 absolute top-6 left-8">"</div>
                <p className="font-display text-2xl leading-snug text-dawn-50 italic mb-10 relative z-10">
                  {review.quote}
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <div className="font-display font-medium text-lg text-dawn-50 leading-tight mb-1">{review.name}</div>
                    <div className="text-xs tracking-widest uppercase text-pewter-500 mb-0.5">{review.role}</div>
                    <div className="text-[10px] tracking-widest uppercase text-blue-400/80">{review.location}</div>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
