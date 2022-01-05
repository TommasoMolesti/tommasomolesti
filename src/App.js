import React from 'react';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
      
    )
  }
}