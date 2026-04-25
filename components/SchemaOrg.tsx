const faqs = [
  {
    question: '¿Para qué sirve tener presencia digital si ya consigo clientes por recomendación?',
    answer: 'La recomendación es eficaz, pero tiene un techo. Una presencia digital bien construida amplía ese radio: cuando alguien recibe tu nombre por referencia, lo primero que hace es buscarte en Google y en LinkedIn. Si no te encuentran, o lo que encuentran no transmite confianza, la oportunidad se pierde. Una web profesional y un LinkedIn activo convierten la recomendación en cierre.',
  },
  {
    question: '¿Qué incluye el servicio de web profesional con identidad visual para empresas?',
    answer: 'El servicio Web + Marca incluye logo e identidad visual, web de hasta 5 páginas, tono de comunicación y mensajes clave, y dominio configurado y entregado. Es un proyecto único, sin retainer. El resultado es una presencia digital operativa en 4 a 6 semanas, lista para que tus clientes te encuentren y entiendan en 10 segundos qué haces.',
  },
  {
    question: '¿Cómo funciona el ghostwriting de LinkedIn para directivos y profesionales?',
    answer: 'Empezamos con una llamada de 30 minutos al mes para extraer tus ideas, experiencias o puntos de vista. A partir de ahí escribo los posts con tu voz y tu criterio. Tú los validas con un mensaje de voz o un comentario rápido, y yo publico. El resultado son 2 a 3 posts semanales en tu perfil sin que hayas escrito una sola línea.',
  },
  {
    question: '¿Cuánto tiempo tarda en verse resultados con LinkedIn corporativo gestionado?',
    answer: 'Los primeros resultados visibles en alcance e interacción aparecen entre 4 y 8 semanas con publicación consistente. El posicionamiento como referente en tu sector suele darse entre los 3 y 6 meses. El SEO de la web tarda entre 3 y 6 meses en posicionar en Google.',
  },
  {
    question: '¿Qué diferencia hay entre el plan Presencia Digital y LinkedIn Profesional?',
    answer: 'El plan Presencia Digital es un retainer mensual completo: web mantenida, SEO técnico, artículo de blog mensual, LinkedIn corporativo de la empresa y llamada mensual de dirección. LinkedIn Profesional es un retainer enfocado exclusivamente en el perfil personal del directivo: ghostwriting de posts, optimización de perfil y coordinación de la página de empresa.',
  },
  {
    question: '¿Puedo externalizar mi comunicación digital sin perder mi voz o mi estilo?',
    answer: 'Sí. Antes de escribir ninguna pieza, documento tu voz: cómo hablas, qué evitas decir, qué posiciones tienes sobre tu sector. En el caso del ghostwriting de LinkedIn, trabajo a partir de tus propias ideas y palabras.',
  },
  {
    question: '¿Qué tipo de empresas y profesionales contratan estos servicios?',
    answer: 'Los perfiles más habituales son despachos de abogados de 3 a 30 personas, ingenierías y consultoras técnicas, y directivos de empresas B2B en sectores técnicos o regulados que no tienen departamento de marketing interno.',
  },
]

export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://alisazinko.com/#person',
        name: 'Alisa Zinchenko',
        url: 'https://alisazinko.com',
        image: 'https://alisazinko.com/alisa-color.png',
        sameAs: ['https://www.linkedin.com/in/alisazin/'],
        jobTitle: 'Consultora de Presencia Digital B2B',
        description:
          'Especialista en presencia digital B2B para despachos de abogados, ingenierías y empresas técnicas en España. Web profesional, LinkedIn corporativo y SEO.',
        knowsAbout: [
          'LinkedIn corporativo',
          'Ghostwriting para directivos',
          'SEO para empresas B2B',
          'Identidad visual',
          'Comunicación B2B',
          'Presencia digital',
        ],
        worksFor: {
          '@type': 'ProfessionalService',
          '@id': 'https://alisazinko.com/#business',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://alisazinko.com/#business',
        name: 'Alisa Zinchenko - Presencia Digital B2B',
        url: 'https://alisazinko.com',
        email: 'alisa@alisazinko.com',
        areaServed: 'España',
        description:
          'Presencia digital B2B para despachos de abogados, ingenierías y empresas técnicas en España. Web profesional con identidad visual, SEO y LinkedIn corporativo gestionado.',
        priceRange: '€€',
        serviceType: [
          'Diseño web profesional',
          'Identidad visual corporativa',
          'LinkedIn corporativo gestionado',
          'Ghostwriting para directivos',
          'SEO técnico B2B',
        ],
        founder: { '@id': 'https://alisazinko.com/#person' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
