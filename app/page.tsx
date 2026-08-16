import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Logos from '@/components/Logos'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'

import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div >
        <Hero />
        <Gallery />
      </div>
      <Testimonials />
      <Logos />
      <Stats />
      <Portfolio />
       
      <Services />
      <About />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
