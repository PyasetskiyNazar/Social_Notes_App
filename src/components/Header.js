import React, { useState } from 'react';
import logo from '../img/1970472.svg';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ButtonAsLink } from './Buttons';
import { IS_LOGGED_IN } from '../gql/query';


const HeaderBar = styled.header`
   display: flex;
   height: 64px;
   position: fixed;
   padding: 0.5em 1em;
   width: 100%;
   align-items: center;
   background-clor: #fff;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
   z-index: 1;
`

const LogoText = styled.h1`
   margin: 0;
   padding: 0 10px;
   display: inline;
`
const UseState = styled.div`
   margin-left: auto;
`

export const Header = (props) => {

  const { data, client } = useQuery(IS_LOGGED_IN)
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
    client.resetStore()
    client.writeData({ data: { isLoggedIn: false } })
    navigate('/signin')
  }

  return (
    <HeaderBar>
      <img src={logo} alt={'social notes logo'} height="40" />
      <LogoText>Social Notes</LogoText>
      <UseState>
        {data.isLoggedIn ? (
          <ButtonAsLink onClick={logOut}>Log Out</ButtonAsLink>
        ) : (
            <p>
              <ButtonAsLink>
                <NavLink to='/signin'>Sign In</NavLink>
              </ButtonAsLink>
              or
              <ButtonAsLink>
                <NavLink to='/signup'>Sign Up</NavLink>
              </ButtonAsLink>
            </p>
          )}
      </UseState>
    </HeaderBar>
  )
}


