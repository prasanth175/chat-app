import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path = "/starred">
        This is starred
      </Route>

      <Route>This is 404 page</Route>
    </Switch>
  );
}

export default App;
