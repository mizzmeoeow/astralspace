import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/action.auth";

import Layout from "./components/layout";
import LandingPage from "./components/pages/landingPage";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Register from "./components/auth/register/register";
import SignIn from "./components/auth/sign-in/sign-in";
import PrivateRoute from "./privateRoute/privateRoute";
import Unsuccess from "./components/auth/login/formUnSuccess";
import Shop from "./components/pages/shop";
import Connect from "./components/pages/connect";
import Blog from "./components/pages/blog";

import { Provider } from "react-redux";
import store from "./store";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Provider store={store}>
            <Layout>
              <Route exact path="/" exact component={LandingPage} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/unsuccess" exact component={Unsuccess} />

              <Route
                path="/login"
                render={() => <SignIn user={this.props.user} />}
              />
              <Route
                path="/register"
                render={() => <Register updateUser={this.updateUser} />}
              />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/connect" exact component={Connect} />
                <PrivateRoute path="/blog" exact component={Blog} />
              </Switch>
            </Layout>
          </Provider>
        </div>
      </div>
    );
  }
}
