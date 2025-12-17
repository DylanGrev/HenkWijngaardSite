import './home.css'


import facebookImage from '../images/socials/Henk_Wijngaard_Facebook.png';
import youtubeImage from '../images/socials/Henk_Wijngaard_YouTube.png';
import spotifyImage from '../images/socials/Henk_Wijngaard_Spotify.png';


function home() {
  return (
    <>
        <div className="contentContainer">
          <div className="mainColumn">
            <p className='textBox'>
              Fijn u te ontmoeten op mijn website. Op deze website vindt u allerlei informatie omtrent mijn optredens, biografie,
              discografie en kunt u de laatste nieuwsberichten lezen.
              <br /><br />
              In de agenda vindt u de data en locaties van mijn optredens en wie weet mag ik u op één van mijn optredens ook verwelkomen.
              <br /><br />
              Een muzikale groet van,
              <br /><br />
              Henk Wijngaard
              </p>
          </div>

          <aside className="sideBoxes">
            <div className="smallStack">
              <div className="youtubeBox"><a href="https://www.youtube.com/@Henkiewijngaard" target="_blank" rel="noopener noreferrer"><img src={youtubeImage} alt="YouTube" className="socialIcon" /></a></div>
              <div className='facebookBox'><a href="https://www.facebook.com/henkwijngaardofficial" target="_blank" rel="noopener noreferrer"><img src={facebookImage} alt="Facebook" className="socialIcon" /></a></div>
            </div>
            <div className='spotifyBox'><a href="https://open.spotify.com/artist/0EyzZUO2ycn0hLjKDFT7Hb?si=iPFRXhvOSm6ervMQwLOUaw" target="_blank" rel="noopener noreferrer"><img src={spotifyImage} alt="Spotify" className="socialIcon" /></a></div>
          </aside>
        </div>
    </>
  )
}

export default home
