export default function Unboxing() {
  return (
    <section id="unboxing" className="relative min-h-screen py-32 bg-ink-900 z-20 flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-16 items-center">
        
        <div className="col-span-12 md:col-span-6 relative aspect-square rounded-[40px] overflow-hidden bg-ink-800">
          <img 
            src="/box.png" 
            alt="AURA Ring 2 Box" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="col-span-12 md:col-span-6 text-dawn-50">
          <h2 className="display-2 mb-12">In the box.</h2>
          
          <ul className="space-y-6">
            {['AURA Ring', 'Charging dock', 'USB-C braided cable', 'Sizing kit', '2-year warranty card'].map((item, i) => (
              <li key={i} className="flex items-center gap-6 group">
                <div className="w-1.5 h-1.5 rounded-full bg-pewter-400 group-hover:bg-[#F0A858] transition-colors" />
                <span className="text-xl font-medium text-pewter-200 group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
