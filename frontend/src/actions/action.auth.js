import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  LOGOUT_USER,
} from "../actions/action.types";

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const tokenCheck = { token: localStorage.getItem("access") };
    try {
      if (tokenCheck.token !== null) {
        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: tokenCheck,
        });
      }
    } catch (e) {
      dispatch({
        type: AUTHENTICATION_FAILED,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { email, password };

  try {
    const res = await axios.post(
      "https://localhost:5000/api/auth/login",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log("user logged In!");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const signup =
  (username, email, password, birthday, question) => async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const body = { username, email, password, birthday, question };

    try {
      console.log(body);
      const res = await axios.post(
        "https://localhost:5000/api/auth/register",
        body,
        config,
        console.log(res)
      );
      console.log(res);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      console.log("user created!");
    } catch (err) {
      dispatch({
        type: SIGNUP_FAILED,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
