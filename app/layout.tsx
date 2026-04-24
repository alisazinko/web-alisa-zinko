import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  title: 'Alisa Zinchenko | Web, Marca y LinkedIn Corporativo para Empresas B2B',
  description: 'Presencia digital B2B para despachos, ingenierías y empresas técnicas en España. Web profesional con identidad visual, SEO y LinkedIn corporativo gestionado.',
  openGraph: {
    title: 'Alisa Zinchenko | Presencia Digital B2B para Empresas en España',
    description: 'Web profesional, SEO y LinkedIn corporativo para despachos, ingenierías y directivos.',
    url: 'https://alisazinko.com',
    siteName: 'Alisa Zinchenko',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
