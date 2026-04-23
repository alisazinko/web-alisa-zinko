'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Necesita una empresa industrial presencia en LinkedIn?',
    answer:
      'Sí. LinkedIn es el canal B2B con mayor retorno para empresas industriales y despachos legales en España. Las empresas del sector técnico que publican contenido consistente generan entre 3 y 5 veces más contactos cualificados que las que no lo hacen. El problema es que muy pocas lo hacen bien, lo que significa una ventaja inmediata para quien empieza.',
  },
  {
    question: '¿Qué es la comunicación B2B para empresas industriales?',
    answer:
      'La comunicación B2B industrial es el conjunto de acciones —LinkedIn, SEO, ferias, email marketing— que permiten a una empresa técnica o legal transmitir su expertise, ganar visibilidad en su sector y atraer clientes sin depender solo del boca a boca. Incluye contenido, posicionamiento de marca y sistemas de captación de leads.',
  },
  {
    question: '¿Cuánto tarda en verse resultados con una estrategia de contenido B2B?',
    answer:
      'Los primeros resultados visibles en LinkedIn aparecen entre 4 y 8 semanas con publicación consistente. El SEO tarda entre 3 y 6 meses en posicionar. Por eso trabajo con sistemas combinados: LinkedIn genera visibilidad rápida mientras el SEO construye autoridad a largo plazo.',
  },
  {
    question: '¿Qué incluye un servicio de comunicación para despachos legales?',
    answer:
      'Un servicio de comunicación para despachos legales incluye: gestión de LinkedIn corporativo, redacción de artículos SEO sobre materias legales, newsletters para clientes y contactos. Todo adaptado al lenguaje técnico-legal y a las restricciones deontológicas de la abogacía.',
  },
  {
    question: '¿Puedo externalizar la comunicación de mi empresa industrial?',
    answer:
      'Sí. Externalizar la comunicación B2B es la opción más eficiente para empresas industriales medianas que no tienen departamento de marketing interno. Un especialista externo gestiona LinkedIn, contenido SEO y captación de leads manteniendo la voz técnica de la empresa sin coste fijo de empleado.',
  },
  {
    question: '¿Qué diferencia a un especialista en comunicación B2B de una agencia de marketing general?',
    answer:
      'Un especialista en comunicación B2B industrial conoce el lenguaje técnico, los ciclos de venta largos y las dinámicas de compra de estos sectores. Una agencia generalista aplica las mismas tácticas de consumo a un contexto completamente diferente. El resultado es contenido que suena genérico y no conecta con el perfil de cliente industrial o legal.',
  },
  {
    question: '¿Por qué contratar un servicio profesional de diseño de presentaciones para empresas?',
    answer:
      'Contratar un servicio profesional de diseño de presentaciones es la forma más efectiva de transformar datos complejos en historias visuales que venden. Me especializo en crear presentaciones de impacto que combinan estrategia de comunicación y diseño visual avanzado. Obtienes: autoridad de marca, claridad estratégica y ahorro de tiempo.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-gray-600 transition-colors"
      >
        <span className="text-sm md:text-base font-medium">{question}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
          {open ? (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-gray-600 leading-relaxed pr-10">{answer}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-[#E8E8E3] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: heading + quote */}
        <div className="md:sticky md:top-24 space-y-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight">
            Preguntas frecuentes sobre comunicación B2B para industria y legal
          </h2>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            Respuestas directas sobre comunicación B2B, contenido para LinkedIn, SEO industrial y
            captación de leads para empresas técnicas y despachos legales.
          </p>
          <blockquote className="border-l-2 border-[#5B58D6] pl-4">
            <p className="text-sm text-gray-700 italic leading-relaxed mb-2">
              "Mi misión es que el conocimiento técnico de tu empresa se convierta en autoridad
              visible y en clientes."
            </p>
            <footer className="text-xs text-gray-500 font-medium">Alisa Zinchenko</footer>
          </blockquote>
        </div>

        {/* Right: accordion */}
        <div className="bg-white rounded-2xl px-6 py-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
