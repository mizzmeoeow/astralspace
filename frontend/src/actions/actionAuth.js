import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from "./actionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Register

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("auth/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("auth/login", userData)
    .then((res) => {
      const { token } = res.data;
      sessionStorage.setItem("jwtToken", token);
      sessionStorage.setItem("user", res.data);

      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // sessionStorage.setItem("userData", JSON.stringify(decoded));

      console.log(token);
      console.log(decoded);
      console.log(res);

      // Set current user
      dispatch(setCurrentUser(decoded));

      // console.log(token);
      // console.log(decoded);
      // console.log(res);
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const roleChange = (role) => {
  return {
    type: SET_ROLE_STATE,
    payload: role,
  };
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const UpdateStart = (userData) => {
  return {
    type: UPDATE_START,
  };
};

export const UpdateSuccess = (user) => {
  return {
    type: UPDATE_SUCCESS,
    payload: user,
  };
};

export const UpdateFailure = () => {
  return {
    type: UPDATE_FAILURE,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("userData");

  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "./login";
};
