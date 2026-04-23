import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-3.5rem)] mt-14 bg-[#F5EDE8] rounded-b-3xl relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div className="space-y-6">
          <h1 className="font-serif text-[clamp(2.8rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.02em] text-[#5B58D6]">
            Comunicación B2B que convierte conocimiento técnico en{' '}
            <em className="not-italic italic">autoridad visible.</em>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
            Trabajo con empresas industriales y despachos legales que saben hacer muy bien su
            trabajo pero no saben comunicarlo. Me encargo de que su expertise se vea, se
            encuentre y genere negocio.
          </p>
          <div className="flex items-center gap-4 pt-2">
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
              Mis Servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          {/* Decorative line */}
          <div className="w-20 h-px bg-gray-300 mt-4" />
        </div>

        {/* Right: images */}
        <div className="hidden md:grid grid-cols-2 gap-3 h-[480px]">
          {/* Portrait photo - placeholder, replace with your photo */}
          <div className="rounded-2xl overflow-hidden bg-gray-200 h-full">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Alisa Zinchenko"
              width={400}
              height={480}
              className="w-full h-full object-cover grayscale"
              priority
            />
          </div>
          {/* Abstract image */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 h-full">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
              alt="Comunicación B2B"
              width={400}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
