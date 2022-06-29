import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';
import { NoteUser } from './NoteUser';

const StyledNote = styled.article`
   max-with: 800px;
   margin: 0 auto;
`
const MetaData = styled.div`
   @media (min-width: 500px){
      display: flex;
      align-items: top;
   }
`

const MetaInfo = styled.div`
   margin-left: 1em;
`
const UserActions = styled.div`
   margin-left: auto;
`


export const Note = ({ note }) => {

  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Error. Note Not found !</p>
  }

  return (
    <StyledNote key={note.id}>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <b>Author:</b> {note.author.username}
        </MetaInfo>
        <MetaInfo>
          <b>Created at:</b> {format(note.createdAt, 'MMM DD YYYY')}
        </MetaInfo>
        {data.isLoggedIn ? (
          <UserActions>
            <NoteUser note={note} />
          </UserActions>) : (
            <MetaInfo>
              <b>Favorites:</b> {note.favoriteCount}
            </MetaInfo>
          )}
      </MetaData>
      <UserActions>
        <ReactMarkdown source={note.content} />
      </UserActions>
    </StyledNote >
  )
}