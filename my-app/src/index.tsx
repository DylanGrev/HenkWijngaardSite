import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Contact from './Contact'
import Header from './components/Header'

function Root() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
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