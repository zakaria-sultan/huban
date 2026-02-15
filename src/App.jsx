import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PartnerStrip from './components/PartnerStrip'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PartnerStrip />
        <About />
        <Testimonials />
        <Pricing onSelectPlan={(plan) => setSelectedPlan(plan)} />
        <News />
        <Contact preselectedPlan={selectedPlan} />
      </main>
      <Footer />
    </div>
  )
}

export default App
