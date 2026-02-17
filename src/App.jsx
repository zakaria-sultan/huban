import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import ServicesPage from './pages/ServicesPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'

import OurHistoryPage from './pages/OurHistoryPage'
import WhyChooseUsPage from './pages/WhyChooseUsPage'

import ServiceDetailPage from './pages/ServiceDetailPage'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {/* Navbar is not inside Routes, but uses Link so it must be inside BrowserRouter which is in main.jsx */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-history" element={<OurHistoryPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
