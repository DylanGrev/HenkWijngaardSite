import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './home'
import Contact from './Contact'

import './index.css'

import Header from './components/Header'
import Agenda from './Agenda'
import Hits from './Hits'
import Biografie from './Biografie'
import Admin from './AdminPanel'
import Footer from './components/Footer'


function Root() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/hits" element={<Hits />} />
            <Route path="/over" element={<Biografie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)