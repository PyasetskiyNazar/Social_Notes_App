import React, { useEffect, useState } from "react";
import { Button } from '../components/Buttons';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { UserForm } from "../components/UserForm";
import { SIGNIN_USER } from "../gql/mutation";

export const SignIn = props => {

  const navigate = useNavigate()
  //Apollo Client
  const client = useApolloClient()
  // mutation hook
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      // saved token 
      localStorage.setItem('token', data.signIn)
      // Update local cache
      client.writeData({ data: { isLoggedIn: true } })
      //redirect user 
      navigate('/')
    }
  })

  const SignInCallback = values => {
    signIn({ variables: values })
  }

  useEffect(() => {
    document.title = 'Sign In - Social Notes App'
  }, [])

  return (
    <React.Fragment>
      <UserForm action={SignInCallback} />
      {loading && <p>Loading ...</p>}
      {error && <p>Error creating an account!</p>}
    </React.Fragment>
  )
}