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
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      sessionStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log(token);
      console.log(decoded);

      // Set current user
      dispatch(setCurrentUser(decoded));
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

export const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      let token = sessionStorage.getItem("jwtToken");
      if (!token || token === "") {
        return;
      }

      dispatch(meFromToken(token)).then((response) => {
        if (!response.error) {
          sessionStorage.setItem("jwtToken", response.payload.data.token);
          dispatch(meFromTokenSuccess(response.payload));
        } else {
          sessionStorage.removeItem("jwtToken");
          dispatch(meFromTokenFailure(response.payload));
        }
      });
    },
  };
};

// Set logged in user
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const UpdateStart = (decoded) => {
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
  localStorage.removeItem("jwtToken");
  sessionStorage.removeItem("jwtToken");

  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
