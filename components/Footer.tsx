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
            Web Profesional - Marca - LinkedIn Corporativo - SEO - Ghostwriting
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-gray-400">© 2026 AlisaZinchenko - All Rights Reserved</p>
          <Link href="/politicas-privacidad" className="text-xs text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2">
            Políticas de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
