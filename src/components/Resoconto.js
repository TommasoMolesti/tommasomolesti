import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'

export default class Resoconto extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <div className='titlePage'>Istruzione</div>
        <div className='testoPage'>Percorsi scolastici terminati e in corso</div>
        <div className='subTitlePage'>Universit&agrave; di Pisa -  Facolt&agrave; di Ingegneria Informatica</div>
        <div className='testoPage'><i>Set 2020 (ancora in corso)</i></div>
        <ul className='listeVarie'>
          <li>Attualmente al 2° anno</li>
        </ul>
        <br />
        <div className='subTitlePage'>I.T.I.S. G. Marconi - Pontedera</div>
        <div className='testoPage'><i>Set 2015 - Giu 2020</i></div>
        <ul className='listeVarie'>
          <li>Diplomato con 98/100 in Informatica</li>
        </ul>
        <br />
        <div className='titlePage'>Esperienze lavorative</div>
        <div className='testoPage'>Esperienze lavorative e di alternanza scuola lavoro svolte</div>
        <div className='subTitlePage'>Taliani Ferro</div>
        <div className='testoPage'><i>Nov 2020 (ancora in corso)</i></div>
        <div className='testoPage'>
          <ul className="listeVarie">
            <li>Sviluppo <a target="blank" href="https://www.talianiferroshop.com">talianiferroshop.com</a> (realizzato con Shopify)</li>
            <li>Ecommerce con più di 10.000 articoli in inventario</li>
            <li>Aggiornamento dei prezzi semi-automatico in base al prezzo del ferro</li>
          </ul>
        </div>
        <div className='subTitlePage'>Digitech (Alternanza scuola lavoro)</div>
        <div className='testoPage'><i>Set 2019 - Dic 2019</i></div>
        <div className='testoPage'>
          <ul className="listeVarie">
            <li>Sviluppo siti web responsive con HTML, CSS e Javascript</li>
          </ul>
        </div>
        <div className='subTitlePage'>Dipartimento di Informatica CNR - Pisa (Alternanza scuola lavoro)</div>
        <div className='testoPage'><i>Feb 2018 - Apr 2019</i></div>
        <div className='testoPage'>
          <ul className="listeVarie">
            <li>Progetto <a target="blank" href="https://www.cnr.it/sites/default/files/public/media/rassegna_stampa/Rep_Scienze_Il_sensore_che_protegge_chi_vive_in_zone_isolate_12-12-2019.pdf">"Social Tech Care"</a></li>
            <li>Configurazione ed installazione di domotica domestica per facilitare la vita quotidiana di persone non autosufficienti</li>
            <li>Esposizione del progetto alla <a target="blank" href="https://www.bright-night.it/">"Notte dei Ricercatori"</a> al CNR di Pisa il 28 settembre 2018</li>
            <li>Vincitore premio "Storie di alternanza" - Camera di Commercio Pisa - 28 novembre 2018</li>
          </ul>
        </div>
        <div className='subTitlePage'>Progetto NAS (Alternanza scuola lavoro)</div>
        <div className='testoPage'><i>Giu 2018 - Giu 2020</i></div>
        <div className='testoPage'>
          <ul className="listeVarie">
            <li>Configurazione di un server Linux NAS che consente agli utenti della scuola di fare il login sui PC dell'edificio per raggiungerei propri dati ovunque all'interno della scuola</li>
            <li>Sviluppo script Bash e script Python per automatizzare le operazioni di manutenzione</li>
            <li>Sviluppo interfaccia web per una migliore manutenzione</li>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}