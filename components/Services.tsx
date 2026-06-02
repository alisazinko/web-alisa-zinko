'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    id: 'coordinacion-ejecutiva',
    badge: 'Fractional CoS',
    badgeColor: 'text-gray-500',
    title: 'Coordinacion Ejecutiva',
    subtitle: 'Soporte operativo externo para que las cosas pasen',
    items: [
      'Coordinacion de proyectos y equipos',
      'Gestion de agenda y prioridades ejecutivas',
      'Seguimiento de OKRs y entregables',
      'Comunicacion interdepartamental',
      'Implementacion de procesos internos',
    ],
    note: 'Para founders y directivos que necesitan estructura sin contratar equipo fijo.',
    featured: false,
    modal: {
      title: 'Coordinacion Ejecutiva',
      subtitle: 'El puente entre lo que decides y lo que ocurre.',
      body: [
        'Muchos directivos tienen claridad sobre el rumbo pero no tienen quién ejecute, coordine y haga seguimiento. Yo actuo como tu Chief of Staff externo: entro dentro del negocio, ordeno lo que no funciona y me aseguro de que cada decision se traduzca en accion.',
        'No es consultoria. Es ejecucion real. Coordino equipos, gestiono proyectos, implemento procesos y te reporto directamente. Sin friccion, sin politica interna, sin coste fijo de contratacion.',
      ],
      cta: 'Hablamos',
      ctaHref: '/contacto',
    },
  },
  {
    id: 'comunicacion-b2b',
    badge: 'Mas contratado',
    badgeColor: 'text-gray-500',
    title: 'Comunicacion B2B',
    subtitle: 'Presencia corporativa que genera confianza y negocio',
    items: [
      'Web profesional con identidad visual',
      'LinkedIn corporativo gestionado',
      'Contenido B2B (articulos, posts, cases)',
      'SEO tecnico y posicionamiento',
      'Estrategia de mensaje y tono de marca',
    ],
    note: 'Empresas B2B de 5-50 personas sin departamento de marketing interno.',
    featured: false,
    modal: {
      title: 'Comunicacion B2B',
      subtitle: 'Tu empresa comunica con la autoridad que merece.',
      body: [
        'Una empresa tecnica o profesional que no comunica bien pierde negocio frente a competidores mas visibles pero menos capaces. Disenyo y gestiono la presencia corporativa para que tus clientes potenciales te encuentren, te entiendan y confien en ti antes de llamarte.',
        'Web con identidad visual, LinkedIn activo, contenido que demuestra expertise y SEO que posiciona. Todo coordinado, todo con tu voz, todo sin que tengas que gestionarlo tu.',
      ],
      cta: 'Pedir presupuesto',
      ctaHref: '/contacto',
    },
  },
]

export default function Services() {
  const [openModal, setOpenModal] = useState<string | null>(null)
  const activeService = services.find((s) => s.id === openModal)

  return (
    <section id="servicios" className="bg-[#ECEBE4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em] mb-4">
            Como puedo ayudarte
          </h2>
          <p className="text-[1.0625rem] text-gray-600 max-w-xl mx-auto leading-[1.7]">
            Directivos y founders que operan en Espana y necesitan estructura, comunicacion y
            analisis sin contratar equipo. Trabajo como soporte ejecutivo externo en tres areas:
            coordinacion operativa, comunicacion B2B y research de negocio.
          </p>
        </div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch max-w-3xl mx-auto">
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
                  <p className={`text-[0.6875rem] font-semibold tracking-[0.1em] uppercase mb-3 ${service.badgeColor}`}>
                    {service.badge}
                  </p>
                  <h3 className="font-serif text-[1.5rem] font-medium leading-[1.15] mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-[1.6]">{service.subtitle}</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100" />

                {/* Items */}
                <ul className="space-y-2.5 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-[1.6]">
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
                <p className="text-[0.6875rem] text-gray-400 leading-[1.6] italic">
                  {service.note}
                </p>

                {/* CTA */}
                <button
                  onClick={() => setOpenModal(service.id)}
                  className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-1.5 ${
                    service.featured
                      ? 'bg-[#5B58D6] hover:bg-[#4a47c0] text-white'
                      : 'border border-gray-400 text-gray-800 group-hover:bg-[#5B58D6] group-hover:border-[#5B58D6] group-hover:text-white'
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

            <h2 className="font-serif text-[1.5rem] leading-[1.15] font-medium mb-2">{activeService.modal.title}</h2>
            <p className="text-sm text-gray-500 leading-[1.6] mb-6">{activeService.modal.subtitle}</p>

            <div className="space-y-4 mb-8">
              {activeService.modal.body.map((paragraph, i) => (
                <p key={i} className="text-[1.0625rem] text-gray-700 leading-[1.7]">
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
