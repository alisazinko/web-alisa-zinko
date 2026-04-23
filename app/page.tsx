import Navbar from '@/components/Navbar'
import FloatingNav from '@/components/FloatingNav'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import MarqueeTags from '@/components/MarqueeTags'
import CTABanner from '@/components/CTABanner'
import Systems from '@/components/Systems'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MarqueeTags />
        <CTABanner />
        <Systems />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <FloatingNav />
    </>
  )
}
