import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'
import Body from './Body';

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <NavigatorBar />
        <Body />
        <Footer />
      </div>
    )
  }
}