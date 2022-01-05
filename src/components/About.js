import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Body from './Body'
import Footer from './Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default class About extends React.Component{
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <p>about</p>
        <Footer />
      </div>
    )
  }
}