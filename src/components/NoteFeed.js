import React from 'react';
import { Note } from './Note';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NoteWrapper = styled.div`
   max-width: 800px;
   margin: 0 auto;
   margin-bottom: 2em;
   padding-bottom: 2em;
   border-bottom: 1px solid #f5f4f0;
`

export const NoteFeed = ({ notes }) => {
   return (
      <div>
         {notes.map(note => (
            <NoteWrapper key={note.id}>
               <Note note={note} />
               <NavLink to={`note/${note.id}`}>Permalink</NavLink>
            </NoteWrapper>
         ))}
      </div>
   )
}