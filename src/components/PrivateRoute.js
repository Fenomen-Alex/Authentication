import React from 'react';
import {Route} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";

const PrivateRoute = ({children, ...rest}) => {
  const { loginWithRedirect, handleRedirectCallback, isAuthenticated, user} = useAuth0();

  if (!isAuthenticated && !user) {
    return loginWithRedirect();
  }

  if (
    window.location.search.includes('code=') &&
    window.location.search.includes('state=')
  ) {
    try {
      handleRedirectCallback();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Route {...rest}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
