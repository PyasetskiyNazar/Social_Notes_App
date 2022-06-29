import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client';
import { GET_NOTE, GET_ME } from '../gql/query';
import { UPDATE_NOTE } from '../gql/mutation';
import { NoteForm } from '../components/NoteForm';

export const EditNote = props => {

  let { id } = useParams()
  const navigate = useNavigate()
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } })
  const { data: userdata } = useQuery(GET_ME)

  const [editNote] = useMutation(UPDATE_NOTE, {
    variables: { id },
    onCompleted: () => {
      navigate(`/note/${id}`)
    }
  })

  const editNoteCallback = values => {
    editNote({
      variables: values
    })
  }

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Error. Note Not found !</p>
  }
  if (userdata && data) {
    if (userdata.me.id !== data.note.author.id) {
      return <p>You do not have access to edit this note</p>
    }
  }

  return <NoteForm note={data.note} action={editNoteCallback} />
}