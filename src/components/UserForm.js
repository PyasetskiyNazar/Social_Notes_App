import React, { useEffect, useState } from "react";
import { Button } from '../components/Buttons';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px; 
  padding: 1em; 
  margin: 0 auto;
`
const FormStyle = styled.div` 
  label,
  input {
    display: block; 
    line-height: 2em;
    }
  input {
    width: 100%;
    margin-bottom: 1em;
}
`

export const UserForm = props => {

  const [values, setValues] = useState()

  useEffect(() => {
    document.title = 'Sign In - Social Notes App'
  }, [])

  const onSubmitForm = (values) => {
    props.action(values)
  }

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  let initialValues = {}

  if (props.formType) {
    initialValues = {
      username: '',
      email: '',
      password: '',
    }
  } else {
    initialValues = {
      email: '',
      password: '',
    }
  }

  return (
    <Wrapper>
      {props.formType ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
      >
        <FormStyle>
          <Form>
            {props.formType &&
              <React.Fragment>
                <label htmlFor="username">Username</label>
                <Field id="username" name="username" placeholder="Username" required />
              </React.Fragment>
            }
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required
            />

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="Password" required />

            <Button type="submit">Submit</Button>
          </Form>
        </FormStyle>
      </Formik>
    </Wrapper>
  )
}

