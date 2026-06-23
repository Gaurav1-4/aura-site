export default function CompanionApp() {
  return (
    <section id="app" className="relative min-h-screen py-32 bg-ink-900 z-20 flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="col-span-12 md:col-span-5">
          <h2 className="display-2 mb-6 text-dawn-50">Data without friction.</h2>
          <p className="text-lg text-pewter-400 leading-relaxed mb-16 max-w-sm">
            AURA's companion app translates millions of microscopic data points into clear, actionable insights. No confusing charts, just what your body needs today.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Readiness', val: '92', color: 'text-blue-400' },
              { label: 'Sleep Score', val: '88', color: 'text-purple-400' },
              { label: 'Activity', val: 'Goal Met', color: 'text-green-400' },
              { label: 'Stress', val: 'Low', color: 'text-orange-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center min-h-[140px] hover:bg-white/10 transition-colors backdrop-blur-md">
                <div className="text-xs uppercase tracking-widest text-pewter-400 mb-2">{stat.label}</div>
                <div className={`font-display text-4xl ${stat.color}`}>{stat.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 flex justify-end md:pr-12 relative pointer-events-none">
          {/* App Screen Mockup */}
          <div className="w-[320px] h-[650px] bg-ink-900 rounded-[48px] p-4 shadow-[0_0_80px_rgba(59,130,246,0.15)] ring-1 ring-white/10 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-6 bg-ink-900 z-20 flex justify-center items-end pb-1">
              {/* Dynamic Island fake */}
              <div className="w-24 h-5 bg-black rounded-full" />
            </div>

            <div className="h-full w-full bg-gradient-to-b from-ink-900 to-ink-800 rounded-[32px] overflow-hidden flex flex-col p-5 pt-12 gap-4">
              
              <div className="flex justify-between items-end mb-2">
                <div>
                  <div className="text-pewter-400 text-xs font-medium tracking-widest uppercase mb-1">Today</div>
                  <div className="text-dawn-50 text-2xl font-display">Optimal</div>
                </div>
                <div className="h-10 w-10 rounded-full border border-white/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                </div>
              </div>

              {/* Main Score Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="text-pewter-400 text-xs uppercase tracking-widest mb-4">Readiness</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display text-dawn-50">94</span>
                  <span className="text-sm text-green-400 font-medium">+2 from yesterday</span>
                </div>
                <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-gradient-to-r from-blue-400 to-green-400 rounded-full" />
                </div>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
                  <div className="text-pewter-400 text-[10px] uppercase tracking-widest mb-2">Sleep</div>
                  <div className="text-2xl font-display text-dawn-50 mb-1">8h 12m</div>
                  <div className="text-xs text-pewter-500">1h 45m Deep</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
                  <div className="text-pewter-400 text-[10px] uppercase tracking-widest mb-2">HRV</div>
                  <div className="text-2xl font-display text-dawn-50 mb-1">64ms</div>
                  <div className="text-xs text-green-400">Baseline recovered</div>
                </div>
              </div>

              {/* Chart Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-4 mt-auto">
                <div className="text-pewter-400 text-[10px] uppercase tracking-widest mb-4">Heart Rate (bpm)</div>
                <div className="h-24 w-full flex items-end gap-1">
                  {[45, 50, 48, 55, 60, 58, 62, 59, 52, 49, 47, 46].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-red-500/20 to-red-400 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
