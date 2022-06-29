import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
   padding: 1em;
   background: #f5f4f0;
   @media (max-width: 700px) { 
      padding-top: 64px;
   }
   @media (min-width: 700px) { 
      position: fixed;
      width: 220px;
      height: calc(100% - 64px); 
      // overflow-y: scroll;
   }

`

const NavList = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none; 
   line-height: 2;

   a {
      text-decoration: none; 
      font-weight: bold; 
      font-size: 1.1em; 
      color: #333;
   }
   a:visited {    
      color: #333;
   }
   a:hover, 
   a:focus {
      color: #0077cc;
   }

`

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/mynotes'>My notes</NavLink>
        </li>
        <li>
          <NavLink to='/favorites'>Favorites</NavLink>
        </li>
        <li>
          <NavLink to='/newnote'>New Note</NavLink>
        </li>
      </NavList>
    </Nav>
  )
}