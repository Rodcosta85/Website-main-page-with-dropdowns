import { useState } from 'react';
import './App.css';
import Overlay from './mobile/Overlay.jsx';
import NavElements from './desktop/NavElements.jsx';
import Databiz from '/images/client-databiz.svg';
import Audiophile from '/images/client-audiophile.svg';
import Meet from '/images/client-meet.svg';
import Maker from '/images/client-maker.svg';
import DesktopImg from '/images/image-hero-desktop.png';
import MobileImg from '/images/image-hero-mobile.png';

const App = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(prevState => !prevState);
  };

  return (
    <>
      <div id="nav">
        <h1 id="snap">snap</h1>
        {<NavElements />}
        <button type="button" onClick={toggleOverlay} id="menu"><img src="images/icon-menu.svg" id="hamb-menu" /></button>
      </div>
      <div id="hero">
        <img id="desktop" src={DesktopImg} alt="desktop image" />
        <img id="mobile" src={MobileImg} alt="mobile image" />
      </div>
      <div id="some-info">
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
      </div>
      <div id="clients">
        <img src={Databiz} alt="" id="databiz" />
        <img src={Audiophile} alt="" id="audiophile" />
        <img src={Meet} alt="" id="meet" />
        <img src={Maker} alt="" id="maker" />
      </div>
      {isOverlayVisible && <Overlay toggleOverlay={toggleOverlay}/>}
    </>
  )
}

export default App
