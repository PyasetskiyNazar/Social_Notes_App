import React from 'react';
import ReactDOM from 'react-dom';
import { Pages } from './pages';
import GlobalStyle from './components/GlobalStyle';
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

//setup API URI and cache
const uri = process.env.API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()

//Checking for the presence of a token and returning the headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  }
})

//setup Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri,
  cache,
  resolvers: {},
  connectToDevTools: true
})

// check local token
const data = {
  isLoggedIn: !!localStorage.getItem('token')
}

//Write cache data on the first boot
cache.writeData({ data })

//write cache data after its reset
client.onResetStore(() => cache.writeData({ data }))

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

