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
import Contact from "./components/pages/contact";
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
              <Route path="/contact" exact component={Contact} />

              <App />
            </Switch>
          </Layout>
        </React.StrictMode>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

document.addEventListener("DOMContentLoaded", main);
