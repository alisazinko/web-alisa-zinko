import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Auditoría',
    description: 'Analizamos tu situación actual y definimos una hoja de ruta clara con objetivos concretos.',
  },
  {
    number: '2',
    title: 'Arquitectura',
    description: 'Diseñamos el sistema de comunicación adaptado a tu sector, tu voz y tus objetivos de negocio.',
  },
  {
    number: '3',
    title: 'Despliegue',
    description: 'Ejecutamos con acompañamiento continuo: contenido, canales y captación en marcha.',
  },
  {
    number: '4',
    title: 'Optimización',
    description: 'Monitorizamos resultados reales y ajustamos para que el sistema mejore con el tiempo.',
  },
]

export default function Systems() {
  return (
    <section id="sistemas" className="bg-[#ECEBE4] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: text */}
        <div className="space-y-6">
          <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight">
            Sistemas que escalan tu autoridad, no solo tu contenido.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Llevo más de 10 años en operaciones, gestión y comunicación corporativa en sectores
            técnicos e industriales. Hoy trabajo como especialista independiente ayudando a
            empresas B2B a construir presencia real, no ruido. Mi especialidad es que tu
            conocimiento técnico trabaje para ti: posicionándote como referente en tu industria
            mientras tú te dedicas a lo que sabes hacer.
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
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors"
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
              <h3 className="font-serif text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
