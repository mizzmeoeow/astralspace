import { SET_CURRENT_USER, USER_LOADING } from "../actions/actionTypes";
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./contextReducer";

const isEmpty = require("is-empty");

export const initialState = {
  isAuthenticated: false,
  // user: {},
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  isFetching: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
