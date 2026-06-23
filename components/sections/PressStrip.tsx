export default function PressStrip() {
  const pubs = [
    { name: "Bloomberg", height: "h-10" },
    { name: "CNBC", height: "h-12" },
    { name: "BBC", height: "h-9" },
    { name: "CNN", height: "h-10" },
    { name: "WIRED", height: "h-8" },
    { name: "Fox News", height: "h-10" }
  ]
  const repeated = [...pubs, ...pubs]

  return (
    <section id="press" className="relative h-[28vh] flex items-center bg-dawn-50 overflow-hidden border-y border-pewter-200/30">
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex w-[200%] animate-marquee items-center h-full">
          {repeated.map((pub, i) => (
            <div key={i} className="flex-1 flex justify-center items-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default">
              <span className={`font-display font-bold text-3xl ${pub.height} flex items-center tracking-wider text-ink-900`}>
                {pub.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
