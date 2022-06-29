import React, { useState } from 'react'
import { ButtonCustom } from './Buttons';
import { useMutation } from '@apollo/client';
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';
import { useNavigate } from 'react-router';

export const FavoriteNote = (props) => {

  const navigate = useNavigate()
  const [count, setCount] = useState(props.favoriteCount)
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter(note => note.id === props.noteId).length > 0
  )

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: { id: props.noteId },
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  })

  const removeFavorite = () => {
    toggleFavorite()
    setFavorited(false)
    setCount(count - 1)

  }

  const addFavorite = () => {
    toggleFavorite()
    setFavorited(true)
    setCount(count + 1)
  }

  return (
    <React.Fragment>
      {favorited ? (
        <ButtonCustom onClick={removeFavorite}>Remove Favorite: {count}</ButtonCustom>
      ) : (
          <ButtonCustom onClick={addFavorite}>Add Favorite: {count}</ButtonCustom>
        )}
    </React.Fragment>
  )
}