import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'


export default class Interessi extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <p>interessi</p>
        <Footer />
      </div>
    )
  }
}