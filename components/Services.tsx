'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    id: 'web-marca',
    badge: 'Proyecto único',
    badgeColor: 'text-gray-500',
    title: 'Web + Marca',
    subtitle: 'Tu presencia digital desde cero, entregada y lista',
    items: [
      'Logo e identidad visual',
      'Web profesional (hasta 5 páginas)',
      'Tono de comunicación y mensajes clave',
      'Dominio configurado y entregado',
    ],
    note: 'Para empresas que necesitan base antes de comprometerse a mensual. Puerta de entrada natural al retainer.',
    featured: false,
    modal: {
      title: 'Web + Marca',
      subtitle: 'Tu presencia digital desde cero, en tres semanas',
      body: [
        'Logo, web y mensaje. Todo lo que necesitas para que un cliente potencial llegue a ti y entienda en 10 segundos qué haces y por qué tú.',
        'Entrego web funcionando con tu dominio, identidad visual coherente y los textos que convierten visita en contacto. Sin reuniones interminables. Sin revisiones eternas.',
      ],
      cta: 'Pedir presupuesto',
      ctaHref: '/contacto',
    },
  },
  {
    id: 'presencia-digital',
    badge: 'Más contratado',
    badgeColor: 'text-gray-500',
    title: 'Presencia Digital',
    subtitle: 'Tu empresa con presencia activa, sin gestionarla tú',
    items: [
      'Web mantenida y actualizada',
      'SEO técnico + 1 artículo de blog/mes',
      'LinkedIn corporativo (2-3 posts/semana)',
      'Estrategia de marca (mes 1)',
      '1 llamada mensual de dirección',
    ],
    note: 'B2B de 5-50 personas sin departamento de marketing. Perfil: despachos, ingenierías, empresas técnicas.',
    featured: false,
    modal: {
      title: 'Presencia Digital',
      subtitle: 'Tu empresa activa online. Sin que tengas que gestionarlo.',
      body: [
        'Web actualizada, posicionamiento en Google y LinkedIn corporativo funcionando cada semana. Tú te dedicas a tu negocio. Yo me encargo de que te encuentren y te recuerden.',
        'Cada mes: una llamada para marcar dirección, un artículo de blog publicado, posts en LinkedIn con tu voz, y tu web siempre al día. Sin briefings eternos, sin aprobar cada pieza desde cero.',
      ],
      cta: 'Hablamos',
      ctaHref: '/contacto',
    },
  },
  {
    id: 'linkedin-profesional',
    badge: 'Retainer mensual',
    badgeColor: 'text-gray-500',
    title: 'LinkedIn Profesional',
    subtitle: 'Tu conocimiento publicado. Sin que escribas una sola línea',
    items: [
      'Optimización de perfil personal (mes 1)',
      '2-3 posts semanales con tu voz',
      'Página de empresa coordinada (opcional)',
      'Llamada mensual de 30 min para extraer ideas',
      'Tú validas, yo publico',
    ],
    note: 'Abogados, ingenieros, CEOs y directivos que tienen el conocimiento pero no el tiempo ni las ganas de escribir.',
    featured: false,
    modal: {
      title: 'LinkedIn Profesional',
      subtitle: 'Sabes más que nadie en tu sector. El problema es que nadie lo sabe.',
      body: [
        'Un abogado, un ingeniero o un director general tiene el conocimiento que sus clientes buscan. Pero LinkedIn da pereza, no hay tiempo, y no se sabe por dónde empezar.',
        'Yo te extraigo las ideas en una llamada de 30 minutos al mes. Las escribo con tu voz. Tú validas con un mensaje de voz o un par de comentarios. Y tu perfil publica cada semana sin que hayas escrito una sola línea.',
      ],
      cta: 'Quiero aparecer en LinkedIn',
      ctaHref: '/contacto',
    },
  },
]

export default function Services() {
  const [openModal, setOpenModal] = useState<string | null>(null)
  const activeService = services.find((s) => s.id === openModal)

  return (
    <section id="servicios" className="bg-[#ECEBE4] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight mb-4">
            Lo que hago por tu empresa
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Tres servicios de presencia digital para empresas B2B en España: web profesional con
            identidad visual desde cero, retainer de presencia digital completa con SEO y LinkedIn
            corporativo, y ghostwriting de LinkedIn para directivos y profesionales que quieren
            publicar sin escribir.
          </p>
        </div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-200 ${
                service.featured
                  ? 'shadow-md ring-1 ring-[#5B58D6]/20'
                  : 'shadow-sm ring-1 ring-black/5 hover:shadow-md hover:ring-1 hover:ring-[#5B58D6]/20'
              }`}
            >
              {/* Top accent bar */}
              <div className={`h-0.5 w-full transition-colors duration-200 ${
                service.featured ? 'bg-[#5B58D6]' : 'bg-transparent group-hover:bg-[#5B58D6]'
              }`} />

              <div className="p-7 flex flex-col gap-6 flex-1">
                {/* Badge + title */}
                <div>
                  <p className={`text-[11px] font-semibold tracking-widest uppercase mb-3 ${service.badgeColor}`}>
                    {service.badge}
                  </p>
                  <h3 className="font-serif text-[1.65rem] font-medium leading-tight mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug">{service.subtitle}</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100" />

                {/* Items */}
                <ul className="space-y-2.5 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-400"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="text-[11px] text-gray-400 leading-relaxed italic">
                  {service.note}
                </p>

                {/* CTA */}
                <button
                  onClick={() => setOpenModal(service.id)}
                  className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-1.5 ${
                    service.featured
                      ? 'bg-[#5B58D6] hover:bg-[#4a47c0] text-white'
                      : 'border border-gray-200 text-gray-700 group-hover:bg-[#5B58D6] group-hover:border-[#5B58D6] group-hover:text-white'
                  }`}
                >
                  Más detalles
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openModal && activeService?.modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <h2 className="font-serif text-3xl font-medium mb-2">{activeService.modal.title}</h2>
            <p className="text-sm text-gray-500 mb-6">{activeService.modal.subtitle}</p>

            <div className="space-y-4 mb-8">
              {activeService.modal.body.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-sm">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href={activeService.modal.ctaHref}
              className="inline-flex items-center gap-2 bg-[#5B58D6] hover:bg-[#4a47c0] text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors"
              onClick={() => setOpenModal(null)}
            >
              {activeService.modal.cta}
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
