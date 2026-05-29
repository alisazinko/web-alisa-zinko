import type { Metadata } from 'next'
import './globals.css'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  metadataBase: new URL('https://alisazinko.com'),
  icons: {
    icon: '/favicon-clean.png',
    apple: '/favicon-clean.png',
  },
  title: 'Alisa Zinchenko | Fractional Chief of Staff · B2B',
  description: 'Soporte ejecutivo externo para directivos y founders en España. Coordinacion de operaciones, comunicacion B2B y research de mercado. Hago que las cosas pasen.',
  alternates: {
    canonical: 'https://alisazinko.com',
  },
  openGraph: {
    title: 'Alisa Zinchenko | Fractional Chief of Staff · B2B',
    description: 'Soporte ejecutivo externo para directivos y founders en España. Coordinacion, comunicacion B2B y research.',
    url: 'https://alisazinko.com',
    siteName: 'Alisa Zinchenko',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/alisa-color.png',
        width: 1222,
        height: 1982,
        alt: 'Alisa Zinchenko - Consultora de Presencia Digital B2B',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alisa Zinchenko | Presencia Digital B2B',
    description: 'Web profesional, SEO y LinkedIn corporativo para empresas técnicas en España.',
    images: ['/alisa-color.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <SchemaOrg />
      </head>
      <body>{children}</body>
    </html>
  )
}
