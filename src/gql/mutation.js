import { gql } from '@apollo/client';

export const NEW_NOTE = gql`
  mutation newNote($content: String!) { 
    newNote(content: $content) {
      id 
      createdAt 
      content
      favoriteCount 
      favoritedBy {
        id
        username
      }
      author {
        username 
        id         
      }
    }
  }
`
export const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) { 
    updateNote(id: $id, content: $content) {
      id 
      createdAt 
      content
      favoriteCount 
      favoritedBy {
        id
        username
      }
      author {
        username 
        id         
      }
    }
  }
`
export const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`
export const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`
export const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`
export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`
