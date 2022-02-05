import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { NavLink } from 'react-router-dom';
import homeIcon from '../homeIcon.png'
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`


const NavigatorBar = () => {
  return (
    <Nav>
      <NavLink to="/" style={{textDecoration:"none"}}>
        <img className="homeIcon" src={homeIcon}/>
        <div className="logo">
          Tommaso Molesti
        </div>
        </NavLink>
      <Burger/>
    </Nav>
  )
}

export default NavigatorBar