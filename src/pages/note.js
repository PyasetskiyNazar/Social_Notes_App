import React from 'react';
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import { Note } from './../components/Note';
import { GET_NOTE } from '../gql/query';

export const NotePage = props => {

  let { id } = useParams()
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } })


  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Error. Note Not found !</p>
  }
  return <Note note={data.note} />

}