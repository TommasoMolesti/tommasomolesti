import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'


export default class ProgettiPersonali extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <div className='titlePage'>Progetti personali</div>
        <div className='testoPage'>Progetti personali già operativi e in fase di sviluppo</div>
        <div className="bar"></div>
        <div className='subTitlePage'>Questo sito <a href="https://github.com/TommasoMolesti/tommasomolesti">(Github)</a></div>
        <div className='testoPage'>
          Questo &egrave; un sito pensato per raccogliere tutte le mie informazioni personali e professionali.<br />
          Il sito è stato sviluppato e messo online in circa una settimana di lavoro dopocena, nel periodo in cui preparavo gli esami per la sessione invernale 2022
          ed ero positivo al Covid-19.<br />
          Lo stile è preso da un template di Wix ed è stato rifatto completamente adattandolo alle mie esigenze usando React Js e CSS.<br />
          Per ogni bug, o problema contattatemi via email nella sezione "Contatti".<br />
          L'idea è nata a Marzo 2020, ma è stata applicata un pochino più tardi.<br />
          Naturalmente è costantemente in aggiornamento in base alle modifiche che mi vengono in mente col passare del tempo, ma potete i vari commit sulla repository Github.
        </div>
        <div className="bar"></div>
        <div className='subTitlePage'>Software per gestione di cassa <a href="https://github.com/TommasoMolesti/cassafestimborgo">(Github)</a></div>
        <div className='testoPage'>
        <ul className="listeVarie">
            <li>Software per la gestione di cassa</li>
            <li>Sviluppato tramite il framework ReactJs</li>
            <li>Per il DB è stato usato Firebase</li>
            <li>Ancora non funzionante al 100%</li>
            <li>Pensato per essere usato come software gestionale di una festa paesana</li>
          </ul>
        </div>
        <div className="bar"></div>
        <Footer />
      </div>
    )
  }
}