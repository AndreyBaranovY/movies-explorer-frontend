import React from "react";
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { isLoggedIn, children, ...rest } = props;
  return (
     isLoggedIn ? <Route {...rest} > {children}</Route>
    : <Redirect to='/'/>
  )
}

export default ProtectedRoute;
