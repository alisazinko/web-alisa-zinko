import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FloatingNav from '@/components/FloatingNav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Alisa Zinchenko Comunicación B2B',
  description:
    'Ponte en contacto con Alisa Zinchenko para hablar sobre comunicación B2B para tu empresa industrial o despacho legal.',
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen mt-14 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div className="space-y-8 md:sticky md:top-28">
              {/* Background large text decoration */}
              <div className="relative">
                <h1 className="font-serif text-[clamp(2.2rem,4vw,3rem)] leading-tight">
                  Ponte en contacto conmigo.
                </h1>
              </div>

              <p className="text-gray-700 leading-relaxed max-w-md">
                Si trabajas en el sector industrial o legal y quieres que tu empresa comunique
                con la autoridad que merece, hablemos. Cuéntame tu proyecto y vemos juntos qué
                tiene más sentido.
              </p>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B58D6" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">Contáctame vía email o utiliza el formulario.</p>
                <a
                  href="mailto:alisa@alisazinko.com"
                  className="text-sm font-medium text-gray-900 hover:text-[#5B58D6] transition-colors underline underline-offset-2"
                >
                  alisa@alisazinko.com
                </a>
              </div>

              <a
                href="https://www.linkedin.com/in/alisa-zinchenko/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5B58D6] hover:bg-[#4a47c0] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Conectar en LinkedIn
              </a>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingNav />
    </>
  )
}
