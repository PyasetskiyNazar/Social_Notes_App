import React, { useEffect, useState } from "react";
import { Button } from '../components/Buttons';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { UserForm } from "../components/UserForm";
import { SIGNUP_USER } from "../gql/mutation";

export const SignUp = props => {

  const navigate = useNavigate()
  //Apollo Client
  const client = useApolloClient()
  // mutation hook
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      // saved token 
      localStorage.setItem('token', data.signUp)
      // Update local cache
      client.writeData({ data: { isLoggedIn: true } })
      //redirect user 
      navigate('/')
    }
  })
  const SignUpCallback = values => {
    signUp({ variables: values })
  }
  useEffect(() => {
    document.title = 'Sign Up - Social Notes App'
  }, [])

  return (
    <React.Fragment>
      <UserForm formType='signup' action={SignUpCallback} />
      {loading && <p>Loading ...</p>}
      {error && <p>Error creating an account!</p>}
    </React.Fragment>
  )
}