import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Contact from './Contact'
import Header from './components/Header'
import Agenda from './Agenda'
import Hits from './Hits'
import Biografie from './Biografie'
import Admin from './AdminPanel'

function Root() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/agenda" element={<Agenda />} />
                    <Route path="/hits" element={<Hits />} />
                    <Route path="/biografie" element={<Biografie />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)