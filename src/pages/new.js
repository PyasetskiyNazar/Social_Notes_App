import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { NoteForm } from '../components/NoteForm';
import { useNavigate } from 'react-router';
import { NEW_NOTE } from '../gql/mutation';
import { GET_NOTES, GET_MY_NOTES } from '../gql/query';


export const NewNote = props => {

  useEffect(() => {
    document.title = 'New Note - Social Notes App'
  }, [])

  const navigate = useNavigate()
  // mutation hook
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    // Retrieve a GET_NOTES and GET_MY_NOTES request to update the cache
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: data => {
      //redirect user to new note
      navigate(`/note/${data.newNote.id}`)
    }
  })

  const onCreateNote = values => {
    data({ variables: values })
  }

  return (
    <React.Fragment>
      {loading && <p>Loading ...</p>}
      {error && <p>Error creating an account!</p>}
      <NoteForm action={onCreateNote} />
    </React.Fragment>
  )
}

