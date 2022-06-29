import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_NOTES } from '../gql/query';
import { NoteFeed } from '../components/NoteFeed'
import styled from 'styled-components';
import { TitleMyNotes } from '../components/GlobalStyle';


export const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes - Social Notes App'
  }, [])

  const { loading, error, data } = useQuery(GET_MY_NOTES)

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{`Error ! ${error.message}`}</p>
  }
  if (data.me.notes.length !== 0) {
    return (
      <React.Fragment>
        <div>
          <TitleMyNotes>My Notes: </TitleMyNotes>
          <NoteFeed notes={data.me.notes} />
        </div>
      </React.Fragment>
    )
  } else {
    return <p>No Notes yet</p>
  }
}