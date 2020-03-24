// @flow
import React from "react";
import { Route, Redirect } from "react-router-dom";

type Props = {
  component: React.AbstractComponent<{}>,
  loginPath?: string,
  path: string
};

const PrivateRoute = ({
  component: Component,
  loginPath,
  path,
  ...rest
}: Props) => {
  const isAuthenticated = localStorage.tokenAPI ? true : false;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated || loginPath === path ? (
          <Component path={path} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: loginPath
            }}
          />
        )
      }
    />
  );
};
PrivateRoute.defaultProps = {
  loginPath: "/login"
};

export default PrivateRoute;
