import React, { useEffect } from 'react';
import { GET_MY_FAVORITES } from '../gql/query';
import { useQuery } from '@apollo/client';
import { NoteFeed } from '../components/NoteFeed';
import styled from 'styled-components';
import { TitleMyNotes } from '../components/GlobalStyle';



export const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites - Social Notes App'
  }, [])

  const { loading, error, data } = useQuery(GET_MY_FAVORITES)

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{`Error ! ${error.message}`}</p>
  }
  if (data.me.favorites.length !== 0) {
    return (
      <React.Fragment>
        <div>
          <TitleMyNotes>My Favorite Notes:</TitleMyNotes>
        </div>
        <NoteFeed notes={data.me.favorites} />
      </React.Fragment>
    )
  } else {
    return <p>No Notes yet</p>
  }
}