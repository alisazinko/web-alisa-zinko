import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#ECEBE4] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Email */}
        <div className="border-t border-gray-300 pt-8 mb-6">
          <a
            href="mailto:alisa@alisazinko.com"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-2 leading-[1.6]"
          >
            alisa@alisazinko.com
          </a>
        </div>

        {/* Large name */}
        <div className="overflow-hidden mb-8">
          <p
            className="text-[clamp(3rem,10vw,7rem)] font-serif font-light leading-none tracking-tight text-gray-900 select-none"
          >
            AlisaZinchenko
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[0.6875rem] tracking-[0.1em] text-gray-500 uppercase">
            Comunicación B2B para industria y legal - LinkedIn - Contenido - Ferias - Leads
          </p>
          <nav className="flex items-center gap-1 flex-wrap">
            <Link href="/#hero" className="px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-300 rounded-full hover:border-gray-500 transition-all">
              Home
            </Link>
            <Link href="/#servicios" className="px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-300 rounded-full hover:border-gray-500 transition-all">
              Servicios
            </Link>
            <Link href="/contacto" className="px-3 py-1.5 text-xs text-white bg-[#5B58D6] hover:bg-[#4a47c0] rounded-full transition-all flex items-center gap-1">
              Contacta
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/politicas-privacidad" className="px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-300 rounded-full hover:border-gray-500 transition-all">
              Políticas de Privacidad
            </Link>
          </nav>
        </div>

        <p className="mt-6 text-xs text-gray-400">© 2026 AlisaZinchenko - All Rights Reserved</p>
      </div>
    </footer>
  )
}
