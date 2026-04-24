'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Para qué sirve tener presencia digital si ya consigo clientes por recomendación?',
    answer:
      'La recomendación es eficaz, pero tiene un techo. Una presencia digital bien construida amplía ese radio: cuando alguien recibe tu nombre por referencia, lo primero que hace es buscarte en Google y en LinkedIn. Si no te encuentran, o lo que encuentran no transmite confianza, la oportunidad se pierde. Una web profesional y un LinkedIn activo convierten la recomendación en cierre.',
  },
  {
    question: '¿Qué incluye el servicio de web profesional con identidad visual para empresas?',
    answer:
      'El servicio Web + Marca incluye logo e identidad visual, web de hasta 5 páginas, tono de comunicación y mensajes clave, y dominio configurado y entregado. Es un proyecto único, sin retainer. El resultado es una presencia digital operativa en 4 a 6 semanas, lista para que tus clientes te encuentren y entiendan en 10 segundos qué haces.',
  },
  {
    question: '¿Cómo funciona el ghostwriting de LinkedIn para directivos y profesionales?',
    answer:
      'Empezamos con una llamada de 30 minutos al mes para extraer tus ideas, experiencias o puntos de vista. A partir de ahí escribo los posts con tu voz y tu criterio. Tú los validas con un mensaje de voz o un comentario rápido, y yo publico. El resultado son 2 a 3 posts semanales en tu perfil sin que hayas escrito una sola línea. El primer mes incluye optimización completa del perfil.',
  },
  {
    question: '¿Cuánto tiempo tarda en verse resultados con LinkedIn corporativo gestionado?',
    answer:
      'Los primeros resultados visibles en alcance e interacción aparecen entre 4 y 8 semanas con publicación consistente. El posicionamiento como referente en tu sector —que alguien te contacte directamente por lo que ve en LinkedIn— suele darse entre los 3 y 6 meses. El SEO de la web tarda entre 3 y 6 meses en posicionar en Google. Por eso el plan Presencia Digital combina ambos canales desde el inicio.',
  },
  {
    question: '¿Qué diferencia hay entre el plan Presencia Digital y LinkedIn Profesional?',
    answer:
      'El plan Presencia Digital es un retainer mensual completo: web mantenida, SEO técnico, artículo de blog mensual, LinkedIn corporativo de la empresa y llamada mensual de dirección. Va dirigido a empresas de 5 a 50 personas sin departamento de marketing. LinkedIn Profesional es un retainer enfocado exclusivamente en el perfil personal del directivo: ghostwriting de posts, optimización de perfil y, opcionalmente, coordinación de la página de empresa. Van dirigidos a abogados, ingenieros, CEOs y directivos que quieren visibilidad personal en su sector.',
  },
  {
    question: '¿Puedo externalizar mi comunicación digital sin perder mi voz o mi estilo?',
    answer:
      'Sí. El proceso está diseñado exactamente para eso. Antes de escribir ninguna pieza, documento tu voz: cómo hablas, qué evitas decir, qué posiciones tienes sobre tu sector. En el caso del ghostwriting de LinkedIn, trabajo a partir de tus propias ideas y palabras. Varios clientes —abogados y directivos— llevan meses publicando sin que nadie haya notado que no escriben ellos mismos.',
  },
  {
    question: '¿Qué tipo de empresas y profesionales contratan estos servicios?',
    answer:
      'Los perfiles más habituales son despachos de abogados de 3 a 30 personas, ingenierías y consultoras técnicas, y directivos —socios, CEOs, gerentes— de empresas B2B en sectores técnicos o regulados. El denominador común es que no tienen departamento de marketing interno, conocen bien su sector pero no tienen tiempo ni recursos para gestionar su presencia digital de forma profesional.',
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
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-gray-600 leading-relaxed pr-10">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-[#ECEBE4] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: heading + quote */}
        <div className="md:sticky md:top-24 space-y-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight">
            Preguntas frecuentes sobre presencia digital B2B
          </h2>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            Respuestas directas sobre web profesional, LinkedIn corporativo, ghostwriting para
            directivos y presencia digital para despachos, ingenierías y empresas técnicas en
            España.
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
