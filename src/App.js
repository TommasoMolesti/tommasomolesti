import React from 'react';
import Home from './components/Home'
import Interessi  from './components/Interessi';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import About from './components/About';
import CookieConsent from "react-cookie-consent";
import PrivacyCookiePolicy from './components/PrivacyCookiePolicy';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default class App extends React.Component{
  render(){
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
}