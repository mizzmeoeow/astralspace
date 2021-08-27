import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
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

// axios.interceptors.request.use((request) => {
//   // console.log(request);
//   request.headers.channelName = "DevTime";
//   return request;
// });
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const status = error.response ? error.response.status : null;

//     if (status === 401) {
//       // will loop if refreshToken returns 401
//       return (
//         refreshToken(store)
//           .then((_) => {
//             error.config.headers["Authorization"] =
//               "Bearer " + store.state.auth.token;
//             error.config.baseURL = undefined;
//             return Axios.request(error.config);
//           })
//           // Would be nice to catch an error here, which would work, if the interceptor is omitted
//           .catch((err) => err)
//       );
//     }

//     return Promise.reject(error);
//   }
// );

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
