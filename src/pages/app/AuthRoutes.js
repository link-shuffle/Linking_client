import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ accessToken, component: Component, ...rest }) => {
  console.log(accessToken);
  return (
    <Route
      {...rest}
      component={props =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default AuthRoute;
