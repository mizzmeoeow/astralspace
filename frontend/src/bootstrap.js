import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from "./history";

import App from "./app";
import Layout from "./components/layout";
import LandingPage from "./components/pages/landingPage";
import Signin from "./components/auth/sign-in/sign-in";
import Register from "./components/auth/register/register";
import Shop from "./components/pages/shop";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Blog from "./components/pages/blog";
// import Users from "./components/users";
import Connect from "./components/pages/connect";
import configureStore from "./store";

const store = configureStore(store);

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <React.StrictMode>
          <Layout>
            <Switch>
              <Route path="/" exact component={LandingPage} />

              <Route
                exact
                path="/sign-in"
                render={(props) => <Signin {...props} />}
              />
              <Route path="/register" exact component={Register} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route
                path="/blog"
                exact
                component={Blog}
                // render={(props) => (
                //   <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                // )}
              />
              <Route path="/connect" exact component={Connect} />

              <App />
              {/* <Users /> */}
            </Switch>
          </Layout>
        </React.StrictMode>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

document.addEventListener("DOMContentLoaded", main);
