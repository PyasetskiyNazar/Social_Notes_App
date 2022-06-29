import React from 'react'
import { NavLink } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../gql/query';
import { DeleteNote } from './DeleteNote';
import { FavoriteNote } from './FavoriteNote';
import { ButtonCustom } from './Buttons';


export const NoteUser = props => {
  const { data, loading, error } = useQuery(GET_ME)

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Error!</p>
  }

  return (
    <React.Fragment>
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
      <br />
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <ButtonCustom>
            <NavLink to={`/edit/${props.note.id}`}>Edit</NavLink>
          </ButtonCustom>

          <DeleteNote noteId={props.note.id}></DeleteNote>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}