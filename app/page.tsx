import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeBar from '@/components/MarqueeBar'
import HowItWorks from '@/components/HowItWorks'
import Differentials from '@/components/Differentials'
import Partners from '@/components/Partners'
import ChatAndForm from '@/components/ChatAndForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <MarqueeBar />
      <Hero />
      <HowItWorks />
      <Differentials />
      <Partners />
      <ChatAndForm />
      <FAQ />
      <Footer />
    </>
  )
}
