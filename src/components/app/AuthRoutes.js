import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ authenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

export default AuthRoute;
