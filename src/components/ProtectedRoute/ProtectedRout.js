import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {
      () => (props.isLoggedIn ? <Component {...props} /> : <Redirect from='/profile' to='/' />)
    }
  </Route>
);

export default ProtectedRoute;
