import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './home'
import Contact from './Contact'

import './index.css'

import Header from './components/Header'
import Footer from './components/Footer'


function Root() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
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