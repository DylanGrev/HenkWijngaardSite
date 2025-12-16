import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App' // the content you want injected on /home

import spotifyIcon from './images/icons/spotify_icon.png'
import facebookIcon from './images/icons/facebook_icon.png'
import youtubeIcon from './images/icons/youtube_icon.png'
import HomepageBanner from './images/Henk_Wijngaard_banner02.png'
import background from './images/Henk_Wijngaard_background.png'

function Root() {
  const isHome = window.location.pathname.startsWith('/home')
  

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      {/* background applied via inline style on .app */}
      <nav className="navbar">
        <div className="nav-container">
          <div id="logoText">Henk Wijngaard</div>

          <div className="navPages">
            <button type="button" className="nav-btn" onClick={() => (window.location.href = '/home')}>Home</button>
            <button type="button" className="nav-btn" onClick={() => (window.location.href = '/over')}>Over</button>
            <button type="button" className="nav-btn" onClick={() => (window.location.href = '/agenda')}>Agenda</button>
            <button type="button" className="nav-btn" onClick={() => (window.location.href = '/contact')}>Contact</button>
          </div>

          <div className="navSocials">
            <a href="https://open.spotify.com/artist/0EyzZUO2ycn0hLjKDFT7Hb?si=iPFRXhvOSm6ervMQwLOUaw" target="_blank" rel="noopener noreferrer">
              <img src={spotifyIcon} alt="Spotify" className="socialIcon" />
            </a>

            <a href="https://www.facebook.com/henkwijngaardofficial" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="socialIcon" />
            </a>

            <a href="https://www.youtube.com/@Henkiewijngaard" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" className="socialIcon" />
            </a>
          </div>
        </div>
      </nav>

      <header className="banner" id="home">
        <img src={HomepageBanner} alt="" />
      </header>

      {/* inject App (all content from App.tsx) only when the path starts with /home */}
      {isHome && <App />}

      <footer className="footer">
        <p className="footerText">© 2025 Henk Wijngaard / Picobello BV. All rights reserved.</p>
      </footer>
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

