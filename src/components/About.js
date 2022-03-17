import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'


export default class About extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <div className='titlePage'>About me</div>
        <div class="wrap-collabsible">
          <input id="collapsible1" class="toggle" type="checkbox" checked/>
          <label for="collapsible1" class="lbl-toggle">School</label>
          <div class="collapsible-content">
            <div class="content-inner">
              <p>
                I graduate in high school in Computer Science.<br/>
                Currently studying Computer Engineering at Università di Pisa
              </p>
            </div>
          </div>

          <input id="collapsible2" class="toggle" type="checkbox" checked/>
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

          <input id="collapsible3" class="toggle" type="checkbox" checked/>
          <label for="collapsible3" class="lbl-toggle">Work</label>
          <div class="collapsible-content">
            <div class="content-inner">
              <p>
                <a>Here</a> is my complete CV. But you can check my work in Portfolio page.
              </p>
            </div>
          </div>

          <input id="collapsible4" class="toggle" type="checkbox" checked/>
          <label for="collapsible4" class="lbl-toggle">Skills</label>
          <div class="collapsible-content">
            <div class="content-inner">
              <p>
              shopify, google ad, html, css, latex, python scripting, firebase, react js,
              react native, wix, rasperry pi, bash scripting, adobe photoshop, adobe premiere,
              samba
              </p>
            </div>
          </div>

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
        <Footer />
      </div>
    )
  }
}