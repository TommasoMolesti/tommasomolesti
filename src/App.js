import React from 'react';
import Home from './components/Home'
import Interessi  from './components/Interessi';
import Contatti from './components/Contatti';
import Resoconto from './components/Resoconto';
import ProgettiPersonali from './components/ProgettiPersonali';

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
            <Route path="/contatti" element={<Contatti/>} />
            <Route path="/resoconto" element={<Resoconto/>} />
            <Route path="/progetti-personali" element={<ProgettiPersonali/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
      
    )
  }
}