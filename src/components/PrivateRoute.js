import React from 'react';
import {Route} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";

const PrivateRoute = ({children, ...rest}) => {
  const { loginWithRedirect, isAuthenticated, user} = useAuth0();
  if (!isAuthenticated && !user) {
    return loginWithRedirect();
  }

  return (
    <Route {...rest}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
