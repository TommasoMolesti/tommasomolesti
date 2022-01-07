import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'

export default class Istruzione extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <div className='titlePage'>Istruzione</div>
        <div className='testoPage'>Percorsi scolastici terminati e in corso</div>
        <div className="bar"></div>
        <div className='subTitlePage'>Universit&agrave; di Pisa -  Facolt&agrave; di Ingegneria Informatica</div>
        <div className='testoPage'><i>Set 2020 (ancora in corso)</i></div>
        <ul className='listeVarie'>
          <li>Attualmente al 2° anno</li>
        </ul>
        <br />
        <div className="bar"></div>
        <div className='subTitlePage'>I.T.I.S. G. Marconi - Pontedera</div>
        <div className='testoPage'><i>Set 2015 - Giu 2020</i></div>
        <ul className='listeVarie'>
          <li>Diplomato con 98/100 in Informatica</li>
        </ul>
        <br />
        
        <br /><br /><br /><br /><br /><br /><br />
        <Footer />
      </div>
    )
  }
}