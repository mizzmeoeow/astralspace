import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT_USER,
} from "../actions/action.types";

const initialState = {
  access: localStorage.getItem("access"),
  isAuthenticated: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        access: payload.token,
      };
    case AUTHENTICATION_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        access: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.token,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
    case LOGOUT_USER:
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
