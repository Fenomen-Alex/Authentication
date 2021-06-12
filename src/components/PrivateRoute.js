import React from 'react';
import {Route} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";

const PrivateRoute = ({children, ...rest}) => {
  const { loginWithRedirect, handleRedirectCallback, isAuthenticated, user} = useAuth0();
  const login = async () => {
    await loginWithRedirect();
    await handleRedirectCallback();
  }
  if (!isAuthenticated && !user) {
    return login();
  }

  return (
    <Route {...rest}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
