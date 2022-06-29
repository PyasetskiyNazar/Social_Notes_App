import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { Home } from './home';
import { MyNotes } from './mynotes';
import { Favorites } from './favorites';
import { Layout } from './../components/Layout';
import { NotePage } from './note';
import { SignUp } from './signup';
import { SignIn } from './signin';
import { useQuery, gql } from '@apollo/client';
import { NewNote } from './new';
import { IS_LOGGED_IN } from '../gql/query';
import { EditNote } from './edit';


export const Pages = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route exact path="/signup"
            element={<SignUp />}
          />
          <Route exact path="/signin"
            element={<SignIn />}
          />
          <Route path="/mynotes"
            element={<PrivateRoute>
              <MyNotes />
            </PrivateRoute>}
          />
          <Route path="/mynotes/note/:id"
            element={<PrivateRoute>
              <NotePage />
            </PrivateRoute>}
          />
          <Route path="/newnote"
            element={<PrivateRoute>
              <NewNote />
            </PrivateRoute>}
          />
          <Route path="/favorites"
            element={<PrivateRoute>
              <Favorites />
            </PrivateRoute>}
          />
          <Route path="/note/:id"
            element={<NotePage />}
          />
          <Route path="/edit/:id"
            element={<PrivateRoute>
              <EditNote />
            </PrivateRoute>}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const PrivateRoute = ({ children }) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN)
  let isAuth = data.isLoggedIn
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Some Error occured!</p>
  }
  return isAuth ? children : <Navigate to="/signin" />
}