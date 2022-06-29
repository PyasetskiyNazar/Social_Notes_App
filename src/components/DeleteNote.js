import React from 'react'
import { ButtonCustom } from './Buttons';
import { useMutation } from '@apollo/client';
import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import { useNavigate } from 'react-router';

export const DeleteNote = (props) => {

  const navigate = useNavigate()

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id: props.noteId },
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: data => {
      navigate('/mynotes')
    }
  })

  return <ButtonCustom onClick={deleteNote}>Delete Note</ButtonCustom>
}