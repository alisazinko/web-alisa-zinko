import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alisa Zinchenko | Comunicación B2B para Industria y Legal',
  description: 'Diseño sistemas de comunicación para empresas B2B con conocimiento técnico. LinkedIn corporativo, contenido SEO, presentaciones, newsletters y captación de leads.',
  openGraph: {
    title: 'Alisa Zinchenko | Comunicación B2B para Industria y Legal',
    description: 'Diseño sistemas de comunicación para empresas B2B con conocimiento técnico.',
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
