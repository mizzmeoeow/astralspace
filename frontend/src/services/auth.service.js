import axios from "axios";

const API_URL = "http://localhost:5000/";

const register = (username, email, password, birthday, question) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    birthday,
    question,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
