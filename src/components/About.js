import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'
import { NavLink } from 'react-router-dom';
/*IMMAGINI SKILLS*/
import Shopify from '../skills-icon/shopify.png'
import GoogleAds from '../skills-icon/google_ads.png'
import Html from '../skills-icon/html.png'
import Css from '../skills-icon/css.png'
import Latex from '../skills-icon/latex.png'
import Python from '../skills-icon/python.png'
import Firebase from '../skills-icon/firebase.png'
import ReactImage from '../skills-icon/react.png'
import Wix from '../skills-icon/wix.png'
import Raspberry from '../skills-icon/raspberry.png'
import Bash from '../skills-icon/bash.png'
import Photoshop from '../skills-icon/photoshop.png'
import Premiere from '../skills-icon/premiere.png'
import Samba from '../skills-icon/samba.png'
import Gimp from '../skills-icon/gimp.png'
import DaVinci from '../skills-icon/da_vinci.png'


export default class About extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <div className='titlePage'>About me</div>
        <div class="wrap-collabsible">
          <div className='container-collapsible'> 
            <input id="collapsible1" class="toggle" type="checkbox"/>
            <label for="collapsible1" class="lbl-toggle">Education</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p>
                  I graduate in high school in Computer Science.<br/>
                  Currently studying Computer Engineering at Università di Pisa
                </p>
              </div>
            </div>
          </div>

          <div className='container-collapsible'>
            <input id="collapsible2" class="toggle" type="checkbox"/>
            <label for="collapsible2" class="lbl-toggle">Running</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p>
                  I run constantly from 2 years. <a target="_blank" href="https://www.strava.com/athletes/39964653">Here</a> is my Strava profile.<br />
                  My personal best on half marathon is 1h 57m 37s. Actually I'm training for Firenze's
                  marathon the next 27th November 2022 (that will be my first marathon ever!).
                </p>
              </div>
            </div>
          </div>

          <div className='container-collapsible'>
            <input id="collapsible3" class="toggle" type="checkbox"/>
            <label for="collapsible3" class="lbl-toggle">Work</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p>
                  <a>Here</a> is my complete CV. But you can check my online projects in <NavLink to="/portfolio">Portfolio</NavLink>.
                </p>
              </div>
            </div>
          </div>

          <div className='container-collapsible'>
            <input id="collapsible4" class="toggle" type="checkbox"/>
            <label for="collapsible4" class="lbl-toggle">Skills</label>
            <div class="collapsible-content">
              <div class="content-inner skills">
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank"><img src={Shopify} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Google_Ads" target="_blank"><img src={GoogleAds} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"><img src={Html} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img src={Css} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/LaTeX" target="_blank"><img src={Latex} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"><img src={Python} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Firebase" target="_blank"><img src={Firebase} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank"><img src={ReactImage} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Wix.com" target="_blank"><img src={Wix} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Raspberry_Pi" target="_blank"><img src={Raspberry} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" target="_blank"><img src={Bash} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop" target="_blank"><img src={Photoshop} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Adobe_Premiere" target="_blank"><img src={Premiere} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/Samba_(software)" target="_blank"><img src={Samba} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/GIMP" target="_blank"><img src={Gimp} /></a>
                </div>
                <div className='skills-container'>
                  <a href="https://en.wikipedia.org/wiki/DaVinci_Resolve" target="_blank"><img src={DaVinci} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className='container-collapsible'>
            <input id="collapsible5" class="toggle" type="checkbox"/>
            <label for="collapsible5" class="lbl-toggle">Personal information</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p>
                  Born in Pontedera, 22.08.2001<br/>
                  From Peccioli 56037, Italy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}