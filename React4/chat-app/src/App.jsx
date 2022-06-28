import React from 'react';

import 'rsuite/dist/rsuite.min.css';
import { Switch } from 'react-router';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';
import PublicRoute from './components/PublicRoute';

function App() {
  return <Switch>

    <PublicRoute path='/signin'>
      <SignIn />
    </PublicRoute>

    <PrivateRoute path='/'>
      <Home />
    </PrivateRoute>
  </Switch>
}

export default App;
