import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";

export default function SiteHeader() {
  const {loginWithRedirect, handleRedirectCallback, logout, isAuthenticated, user} = useAuth0();
  const login = () => {
    loginWithRedirect();
    handleRedirectCallback();
  }

  return (
    <div className="site-header">
      {/* stuff on the left */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* stuff on the right */}
      <div>
        {!isAuthenticated && <button onClick={login}>Login</button>}
        {isAuthenticated && (
          <>
            <button>{user.name}</button>
            <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
