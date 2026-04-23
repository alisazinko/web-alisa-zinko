import Image from 'next/image'

const services = [
  {
    id: 'eco',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: 'Plan Eco Digital',
    subtitle: 'LinkedIn corporativo sin dedicarle tiempo',
    description:
      'Genero contenido estratégico para tu LinkedIn manteniendo tu voz. Llamada mensual para definir dirección, yo redacto, tú validas. Tu empresa construye autoridad sin escribir una sola línea.',
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&q=80',
    ],
    imageAlts: ['Balanza de justicia', 'LinkedIn en móvil'],
  },
  {
    id: 'autoridad',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12 19.79 19.79 0 0 1 1.12 3.4 2 2 0 0 1 3.1 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.59a16 16 0 0 0 6.29 6.29l1.36-1.36a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.9 16z" />
      </svg>
    ),
    title: 'Plan Autoridad',
    subtitle: 'Tu centro de autoridad digital',
    description:
      'Web en Framer rápida y moderna + artículo de blog SEO mensual + contenido para LinkedIn. Tu presencia online trabajando para ti de forma constante.',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
    ],
    imageAlts: ['Web en pantalla', 'Código'],
  },
  {
    id: '360',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: 'Plan 360º',
    subtitle: 'Tu departamento de comunicación completo',
    description:
      'Web, LinkedIn, SEO y email marketing coordinados. Estrategia integral para atraer, captar y nutrir leads de forma sistemática sin que tengas que gestionar nada.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
    ],
    imageAlts: ['Equipo industrial', 'Email en móvil'],
  },
  {
    id: 'decks',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Decks B2B',
    subtitle: 'Tu reunión más importante, preparada',
    description:
      'Diseño y redacción de presentaciones para vender, convencer o impresionar. El contenido y la narrativa que hacen que tu interlocutor diga que sí.',
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    ],
    imageAlts: ['Presentación en sala', 'Laptop con gráficos'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-[#E8E8E3] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight mb-4">
            Lo que hago por tu empresa
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Diseño sistemas de comunicación para empresas B2B con conocimiento técnico. LinkedIn
            corporativo, contenido SEO, presentaciónes, newsletters y captación de leads: todo
            conectado, con tu voz y sin robarte tiempo.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600">
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif text-xl font-medium mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{service.subtitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
                {service.images.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                    <Image
                      src={src}
                      alt={service.imageAlts[i]}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
