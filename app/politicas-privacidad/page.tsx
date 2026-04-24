import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingNav from '@/components/FloatingNav'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad | Alisa Zinchenko',
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="mt-14 min-h-screen bg-[#ECEBE4]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="font-serif text-4xl mb-8">Políticas de Privacidad</h1>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <p>
              En AlisaZinchenko.com, accesible desde alisazinko.com, una de nuestras
              principales prioridades es la privacidad de nuestros visitantes. Esta Política de
              Privacidad documenta qué información recopilamos y por qué.
            </p>
            <h2 className="font-serif text-2xl mt-8 mb-3">Información que recopilamos</h2>
            <p>
              Cuando utilizas el formulario de contacto, recopilamos tu nombre, dirección de
              correo electrónico, número de teléfono (opcional), nombre de empresa (opcional) y
              el mensaje que nos envías. Esta información se utiliza únicamente para responder
              a tu consulta.
            </p>
            <h2 className="font-serif text-2xl mt-8 mb-3">Cookies</h2>
            <p>
              Utilizamos Google Analytics para analizar el tráfico de nuestra web. Google
              Analytics puede utilizar cookies para recopilar información sobre cómo los
              visitantes utilizan el sitio.
            </p>
            <h2 className="font-serif text-2xl mt-8 mb-3">Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, puedes contactarme en{' '}
              <a href="mailto:alisa@alisazinko.com" className="text-[#5B58D6] underline">
                alisa@alisazinko.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingNav />
    </>
  )
}
