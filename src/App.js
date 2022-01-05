import React from 'react';
import Navbar from './components/Nav/Navbar';
import Body from './components/Body'
import Footer from './components/Footer'

export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    )
  }
}