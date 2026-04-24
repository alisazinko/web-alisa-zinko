import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-3.5rem)] mt-14 bg-[#FFFFFF] rounded-b-3xl overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 h-full grid grid-cols-1 md:grid-cols-[42%_1fr] gap-10 items-center py-10">
        {/* Left: text */}
        <div className="space-y-6">
          <h1 className="font-serif text-[clamp(3rem,5.5vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-[#5B58D6]">
            Presencia digital para empresas B2B que no tienen tiempo de{' '}
            <em className="not-italic italic">gestionarla.</em>
          </h1>
          <p className="text-[1.0625rem] text-gray-700 leading-[1.7] max-w-md">
            Trabajo con despachos de abogados, ingenierías y directivos que dominan su sector
            pero no aparecen online. Diseño la web con su identidad visual, gestiono su
            LinkedIn corporativo y me encargo del SEO para que sus clientes potenciales los
            encuentren antes que a la competencia.
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
              className="inline-flex items-center gap-2 border border-gray-400 text-gray-800 hover:border-[#5B58D6] hover:text-[#5B58D6] px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Mis Servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="hidden md:block h-[min(80vh,640px)] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src="/alisa-color.png"
            alt="Alisa Zinchenko"
            width={1222}
            height={1982}
            quality={100}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 18%' }}
            priority
          />
        </div>
      </div>
    </section>
  )
}
