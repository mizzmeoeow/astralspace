import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app";
import axios from "axios";

import "./style/main.scss";

import * as serviceWorker from "./serviceWorker";
import history from "./history";

axios.defaults.baseURL = "http://localhost:5000/api/";

let userData = JSON.parse(localStorage.getItem("userData"));
let token;
if (userData) {
  token = userData.token;
}

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    //  console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
