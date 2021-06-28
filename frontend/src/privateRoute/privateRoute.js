import React from "react";
import AuthService from "./Services/AuthService";
import { Redirect, Route } from "react-router-dom";
import Dashboard from "../components/pages/dashboard";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = AuthService.isLoggedIn();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Dashboard {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
