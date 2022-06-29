import React, { useEffect, useState } from "react";
import { Button } from '../components/Buttons';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Wrapper = styled.div`
  height: 100%; 
`

export const NoteForm = props => {

  let noteValue = ''
  if (props.note) {
    noteValue = props.note.content
  }

  const [value, setValue] = useState(noteValue)

  const onSubmitForm = (value) => {
    props.action(value)
  }

  const onChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  let initialValues = {
    content: value
  }

  return (
    <Wrapper>
      <h1>New Note</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
      >
        <Form style={{ height: '80%' }}>
          <Field
            style={{ height: '100%', width: '100%' }}
            component="textarea"
            id="content"
            name="content"
            placeholder="content"
            type="content"
            required
          />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </Wrapper>
  )
}

