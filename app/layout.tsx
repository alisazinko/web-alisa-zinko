import type { Metadata } from 'next'
import './globals.css'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  metadataBase: new URL('https://alisazinko.com'),
  icons: {
    icon: '/favicon-clean.png',
    apple: '/favicon-clean.png',
  },
  title: 'Alisa Zinchenko | Web, Marca y LinkedIn Corporativo para Empresas B2B',
  description: 'Presencia digital B2B para despachos, ingenierías y empresas técnicas en España. Web profesional con identidad visual, SEO y LinkedIn corporativo gestionado.',
  alternates: {
    canonical: 'https://alisazinko.com',
  },
  openGraph: {
    title: 'Alisa Zinchenko | Presencia Digital B2B para Empresas en España',
    description: 'Web profesional, SEO y LinkedIn corporativo para despachos, ingenierías y directivos.',
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
