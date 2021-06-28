import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./components/pages/dashboard";
import Register from "./components/auth/register/register";
import Shop from "./components/pages/shop";
import Connect from "./components/pages/connect";
import Blog from "./components/pages/blog";
import LoginContainer from "./components/auth/login/loginContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("http://localhost:5000/user").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Switch>
              {this.state.loggedIn && (
                <p>Join the party, {this.state.username}!</p>
              )}
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/connect" exact component={Connect} />
              <Route
                path="/blog"
                exact
                component={Blog}
                // render={(props) => (
                //   <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                // )}
              />

              <Route
                path="/sign-in"
                render={() => <LoginContainer user={this.props.user} />}
              />
              <Route
                path="/register"
                render={() => <Register updateUser={this.updateUser} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
