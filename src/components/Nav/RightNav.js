import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    z-index:99;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.2s ease-in-out;
    li,a {
      color: black;
      align-self: center;
      font-size:20px;
      margin-top:10px;
      text-decoration:none;
    }
  }
  @media (min-width: 1000px){
    li,a{
      text-decoration:none;
      font-size:20px;
      padding:8px;
      margin-top:2%;
    }
    a:hover{
      color:#005FEB;
    }
    .active{
      color:#005FEB;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><NavLink activeClassName="active" to="/"><a>Home</a></NavLink></li>
      {/*<li><NavLink to="/interessi"><a>Interessi</a></NavLink></li>*/}
      <li><NavLink activeClassName="active" to="/portfolio"><a>Portfolio</a></NavLink></li>
      <li><NavLink activeClassName="active" to="/about"><a>About me</a></NavLink></li>
      <li><NavLink activeClassName="active" to="/contacts"><a>Contacts</a></NavLink></li>
    </Ul>
  )
}

export default RightNav