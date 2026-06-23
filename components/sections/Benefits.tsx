export default function Benefits() {
  const rows = [
    { eyebrow: 'CARDIOVASCULAR', title: 'Heart Rate Variability', desc: 'AURA measures the microscopic variations in time between your heartbeats. High HRV indicates your autonomic nervous system is fully recovered and primed for peak performance.', sparkline: "M0 15 Q 10 10, 20 15 T 40 10 T 60 20 T 80 5 T 100 15", metric: "64 ms" },
    { eyebrow: 'RESTORATION', title: 'Sleep Architecture', desc: 'We don\'t just track when you close your eyes. AURA maps your night into REM, Light, and Deep sleep cycles, evaluating your body\'s nocturnal repair process with clinical precision.', sparkline: "M0 20 Q 15 5, 30 20 T 50 10 T 70 20 T 100 5", metric: "8h 12m" },
    { eyebrow: 'RESPIRATORY', title: 'Blood Oxygen (SpO2)', desc: 'Continuous nocturnal blood oxygen sensing tracks your respiratory efficiency. Micro-drops in your SpO2 levels can be an early indicator of illness, altitude stress, or overtraining.', sparkline: "M0 5 Q 20 5, 40 5 T 70 8 T 80 5 T 100 5", metric: "98%" }
  ];

  return (
    <section id="benefits" className="relative min-h-screen py-32 bg-dawn-50 z-20">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 md:col-span-5 relative min-h-[600px] pointer-events-none">
          {/* Ring will drift into this space via GSAP on the left */}
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col pt-24">
          <div className="flex flex-col border-t border-pewter-200">
            {rows.map((row, i) => (
              <div key={i} className="py-12 border-b border-pewter-200 grid grid-cols-12 gap-6 items-center group">
                <div className="col-span-12 md:col-span-8">
                  <div className="text-[10px] tracking-widest uppercase font-bold text-[#F0A858] mb-3">{row.eyebrow}</div>
                  <h3 className="display-2 mb-3 text-ink-900">{row.title}</h3>
                  <p className="text-pewter-500 leading-relaxed text-sm max-w-sm mb-6">{row.desc}</p>
                  
                  <div className="h-6 w-32 relative">
                    <svg viewBox="0 0 100 20" className="w-full h-full stroke-pewter-300 fill-none overflow-visible" strokeWidth="2" strokeLinecap="round">
                      <path id={`path-${i}`} d={row.sparkline} />
                      <circle r="3" className="fill-[#F0A858]">
                        <animateMotion dur="4s" repeatCount="indefinite">
                          <mpath href={`#path-${i}`} />
                        </animateMotion>
                      </circle>
                    </svg>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 flex justify-end">
                  <div className="px-6 py-4 rounded-3xl border border-pewter-200 bg-white/40 shadow-sm backdrop-blur-sm text-2xl font-display font-medium text-ink-900">
                    {row.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pl-8 border-l-2 border-pewter-200">
            <p className="font-display text-4xl leading-tight text-ink-900 italic mb-4">
              "Three numbers do more for daily decisions than thirty."
            </p>
            <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-pewter-400">
              AURA RESEARCH, 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
