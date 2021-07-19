import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Layout from "./components/layout";
import LandingPage from "./components/pages/landingPage";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Register from "./components/auth/register/register";
import Unsuccess from "./components/auth/login/formUnSuccess";
import Shop from "./components/pages/shop";
import Connect from "./components/pages/connect";
import Blog from "./components/pages/blog";
import LoginContainer from "./components/auth/login/loginContainer";

import { Provider } from "react-redux";
import store from "./store";

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
    axios.get("http://localhost:5000/api/auth/loggedIn").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          email: response.data.user.email,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          email: null,
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Provider store={store}>
            <Switch>
              <Layout>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" exact component={LandingPage} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/connect" exact component={Connect} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/unsuccess" exact component={Unsuccess} />

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
