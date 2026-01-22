import './header.css'

import spotifyIcon from '../../images/icons/spotify_icon.png';
import facebookIcon from '../../images/icons/facebook_icon.png';
import youtubeIcon from '../../images/icons/youtube_icon.png';
import HomepageBanner from '../../images/Henk_Wijngaard_banner02.png';


export default function Header() {
    return (
<>

      {/* background applied via inline style on .app */}
      <div>
      <nav className="navbar">
        <div className="nav-container">
          <div id="logoText">Henk Wijngaard</div>

          <div className="navPages">
            <button type="button" className="nav-btn" onClick={() => (window.location.href = '/')}>Home</button>
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
      </div>

    </>
    )
}