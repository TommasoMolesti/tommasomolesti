import React, {useEffect } from 'react';
import Home from './components/Home'
import Interessi  from './components/Interessi';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import About from './components/About';
import CookieConsent from "react-cookie-consent";
import PrivacyCookiePolicy from './components/PrivacyCookiePolicy';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
  const TRACKING_ID = "UA-228774250-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

const App = () =>{
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return(
    <div>
      <BrowserRouter>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/interessi" element={<Interessi />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/privacy-and-cookie-policy" element={<PrivacyCookiePolicy/>} />
        </Routes>
        </div>
      <CookieConsent
        location="bottom"
        buttonText="Ho capito"
        cookieName="Cookies1"
        style={{ background: "black", textColor: "white"}}
        buttonStyle={{ background: "white", fontSize: "10px", width: "100px", height: "30px", position: "absolute", right: 0, textColor: "black"}}
        expires={150}
      >
        Questo sito utilizza i cookies, ma solo il minimo indispensabile. <Link to="/privacy-and-cookie-policy"><a className='moreInfo'>Dimmi di pi&ugrave;</a></Link>
      </CookieConsent>
      </BrowserRouter>
    </div>
    
  )
}
export default App;