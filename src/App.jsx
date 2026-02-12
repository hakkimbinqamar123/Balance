import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

import Header from './Components/Header'
import Footer from './Components/Footer'
import PageLoader from './Components/PageLoader'
import WhatsAppFloat from './Components/WhatsAppFloat'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <>
      {loading && <PageLoader />}

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />

      {/* Persistent floating WhatsApp */}
      <WhatsAppFloat />
    </>
  )
}

export default App
