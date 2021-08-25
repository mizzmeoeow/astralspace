import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/actionAuth";

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
import Literature from "./components/categories/pages/literature";
import Architecture from "./components/categories/pages/architecture";
import Cinema from "./components/categories/pages/cinema";
import GraphicDesign from "./components/categories/pages/graphicDesign";
import Music from "./components/categories/pages/music";
import Painting from "./components/categories/pages/painting";
import PerformingArts from "./components/categories/pages/performing";
import Sculpting from "./components/categories/pages/sculpting";

import { Provider } from "react-redux";
import store from "./store";
// import Settings from "./components/categories/pages/settings/settings";
import Single from "./components/categories/pages/single/single";

if (sessionStorage.jwtToken != null) {
  // Set auth token header auth
  const token = sessionStorage.jwtToken;
  // setAuthToken(token);
  console.log(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(token);

  sessionStorage.setItem("user", JSON.stringify(decoded));

  console.log(decoded);

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
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="container">
        <div>
          {currentUser && <Link to="/dashboard">HomeSpace</Link>}
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
                {/* <PrivateRoute path="/settings" exact component={Settings} /> */}
                <PrivateRoute path="/connect" exact component={Connect} />
                <PrivateRoute path="/literature" exact component={Literature} />
                <PrivateRoute
                  path="/architecture"
                  exact
                  component={Architecture}
                />
                <PrivateRoute path="/cinema" exact component={Cinema} />
                <PrivateRoute
                  path="/Graphic-Design"
                  exact
                  component={GraphicDesign}
                />
                <PrivateRoute path="/music" exact component={Music} />
                <PrivateRoute path="/painting" exact component={Painting} />
                <PrivateRoute
                  path="/Performing-Arts"
                  exact
                  component={PerformingArts}
                />
                <PrivateRoute path="/sculpting" exact component={Sculpting} />
                <Route
                  path="/post/:postId"
                  render={(props) => (
                    <Single {...props} handleUpdate={this.updateMode} />
                  )}
                />
              </Switch>
            </Layout>
          </Provider>
        </div>
      </div>
    );
  }
}
