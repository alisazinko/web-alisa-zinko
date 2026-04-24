import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-[#ECEBE4] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl px-8 py-12 text-center">
          <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] mb-8">
            Tu empresa merece aparecer online antes que la competencia.
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#5B58D6] hover:bg-[#4a47c0] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Contacto
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
