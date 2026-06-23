import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-dawn-50 py-24 px-8 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-5">
          <div className="font-display font-bold text-3xl tracking-widest mb-4">AURA</div>
          <p className="text-pewter-200 text-sm max-w-xs leading-relaxed">
            Wellness inspired by nature. Engineered with nano-precision sensors for sleep, stress and recovery.
          </p>
        </div>
        
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs opacity-60">Shop</h4>
          <ul className="space-y-4 text-sm text-pewter-200">
            <li><Link href="/" className="hover:text-white transition-colors">AURA Ring 2</Link></li>
            <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
            <li><Link href="/subscription" className="hover:text-white transition-colors">Subscription</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Sizing Kit</Link></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs opacity-60">Company</h4>
          <ul className="space-y-4 text-sm text-pewter-200">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Press</Link></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3">
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs opacity-60">Support</h4>
          <ul className="space-y-4 text-sm text-pewter-200">
            <li><Link href="/" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Warranty</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Returns</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-pewter-400">
        <div>© 2026 AURA. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
