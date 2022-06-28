import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoute({ children, ...routeProps }) {

    const profile = false;

    if(!profile) {
        return <Redirect to="/signin" />
    }


  return (
    <div>
        <Route { ...routeProps }>
            {children}
        </Route>
    </div>
  )
}

export default PrivateRoute;