import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Diagnostico',
    description: 'Entiendo el negocio, los cuellos de botella y las prioridades reales. Sin filtros, sin presentaciones. Una conversacion directa para saber donde duele y que tiene mas impacto.',
  },
  {
    number: '2',
    title: 'Estructura',
    description: 'Ordeno lo que no funciona. Priorizo, establezco procesos y defino quien hace que. El objetivo es claridad operativa antes de empezar a ejecutar.',
  },
  {
    number: '3',
    title: 'Ejecucion',
    description: 'Me encargo de que las cosas pasen. Coordino equipos, gestiono proyectos, comunico hacia dentro y hacia fuera. Reporte directo al directivo sin intermediarios.',
  },
  {
    number: '4',
    title: 'Seguimiento',
    description: 'Mido lo que importa, ajusto lo que no funciona y te mantengo informado. Cada semana sabes exactamente en que punto esta cada iniciativa.',
  },
]

export default function Systems() {
  return (
    <section id="sistemas" className="bg-[#ECEBE4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: text */}
        <div className="space-y-6">
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em]">
            Soporte ejecutivo externo para directivos que necesitan que las cosas pasen.
          </h2>
          <p className="text-[1.0625rem] text-gray-600 leading-[1.7]">
            Llevo mas de 10 anos trabajando en operaciones, comunicacion y coordinacion corporativa
            en entornos B2B. Hoy trabajo como Fractional Chief of Staff para founders y directivos
            en Espana que tienen vision pero no tienen quién ejecute. Me meto dentro del negocio,
            identifico lo que frena el avance y me encargo de que cada decision se convierta en
            resultado concreto.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
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

        {/* Right: 4 step cards */}
        <div className="space-y-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl px-6 py-8 text-center">
              <p className="font-serif text-5xl font-light text-gray-800 mb-1">{step.number}</p>
              <div className="w-12 h-px bg-gray-200 mx-auto mb-4" />
              <h3 className="font-serif text-[1.5rem] leading-[1.15] font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-[1.6] max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
