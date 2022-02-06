import React from 'react';
import styled from 'styled-components';
import ukFlag from '../ukFlag.png'
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #e7e7e7;
    position: fixed;
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
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/"><a>Home</a></Link></li>
      {/*<li><Link to="/interessi"><a>Interessi</a></Link></li>*/}
      <li><Link to="/resoconto"><a>Resoconto</a></Link></li>
      <li><Link to="/progetti-personali"><a>Progetti personali</a></Link></li>
      <li><Link to="/contatti"><a>Contatti</a></Link></li>
      {/*<li><img src={ukFlag} height="20px" width="40px"/></li>*/}
    </Ul>
  )
}

export default RightNav