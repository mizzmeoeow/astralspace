import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout";
import LandingPage from "./components/pages/landingPage";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Register from "./components/auth/register/register";
import Shop from "./components/pages/shop";
import Connect from "./components/pages/connect";
import Blog from "./components/pages/blog";
import LoginContainer from "./components/auth/login/loginContainer";
import PrivateRoute from "./components/routing/privateRoute";

import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
    };
  }

  render() {
    return (
      <div className="container">
        <div>
          <Provider store={store}>
            <Switch>
              <Layout>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route path="/" exact component={LandingPage} />
                <Route path="/contact" exact component={Contact} />
                {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                <Route path="/shop" exact component={Shop} />
                <Route path="/connect" exact component={Connect} />
                <Route path="/blog" exact component={Blog} />
                <Route
                  path="/login"
                  render={() => <LoginContainer user={this.props.user} />}
                />
                <Route
                  path="/register"
                  render={() => <Register updateUser={this.updateUser} />}
                />
              </Layout>
            </Switch>
          </Provider>
        </div>
      </div>
    );
  }
}
