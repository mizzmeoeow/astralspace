import axios from "axios";

const setAuthToken = (userData) => {
  if (userData) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("token")}`;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
