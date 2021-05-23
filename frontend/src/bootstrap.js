import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";
import LandingPage from "./components/pages/landingPage";
import Signin from "./components/auth/sign-in/sign-in";
import Register from "./components/auth/register/register";
import Shop from "./components/pages/shop";
import Contact from "./components/pages/contact";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/sign-in" exact component={Signin} />
            <Route path="/register" exact component={Register} />
            <Route path="/Shop" exact component={Shop} />
            <Route path="/Contact" exact component={Contact} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
