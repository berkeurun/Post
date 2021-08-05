import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { AddPostForm } from './features/posts/AddPostForm';
import { PostsList } from './features/posts/PostsList';
import './App.css';

function App()  {
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route
          exact
          path="/"
          render={() => (
           <React.Fragment>
             <AddPostForm />
             <PostsList />
           </React.Fragment>
          )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App


