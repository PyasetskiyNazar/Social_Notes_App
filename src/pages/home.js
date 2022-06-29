import React, { useEffect } from 'react';
import { Button } from '../components/Buttons';
import { gql, useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { NoteFeed } from '../components/NoteFeed';
import { GET_NOTES } from '../gql/query';


export const Home = () => {
  useEffect(() => {
    document.title = 'Social Notes App'
  }, [])
  // Apollo Client hook
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  const loadMore = () => {
    fetchMore({
      variables: { cursor: data.noteFeed.cursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [
              ...previousResult.noteFeed.notes,
              ...fetchMoreResult.noteFeed.notes
            ],
            _typename: 'noteFeed'
          }
        }
      }
    })
  }

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Error !</p>
  }
  return (
    <React.Fragment>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (<Button onClick={loadMore}>Load More</Button>)}
    </React.Fragment>
  )
}