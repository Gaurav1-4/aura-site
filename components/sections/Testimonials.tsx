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
    <section id="testimonials" className="relative pt-56 pb-32 bg-dawn-50 z-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-pewter-200 bg-white/40 text-xs tracking-widest uppercase mb-8 font-medium">
            WORN BY
          </div>
          <h2 
            className="text-ink-900 tracking-tight leading-[1.05] max-w-3xl mb-6 font-display" 
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
            <LiquidGlassCard key={i} borderRadius="24px" className="flex flex-col h-full bg-white/60">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={review.img} alt={review.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] tracking-widest font-bold uppercase text-dawn-50 border border-white/20">
                  {review.location}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="text-4xl font-display text-pewter-300 mb-2 leading-none">"</div>
                <hr className="border-pewter-200/50 mb-6 w-8" />
                <p className="font-display text-2xl leading-snug text-ink-900 italic mb-8">
                  {review.quote}
                </p>
                <hr className="border-pewter-200/50 mt-auto mb-6" />
                <div className="flex flex-col">
                  <span className="font-display font-medium text-lg">{review.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-pewter-400 mt-1">{review.role}</span>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
