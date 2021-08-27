import { SET_CURRENT_USER, USER_LOADING } from "../actions/actionTypes";
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

let user = JSON.parse(localStorage.getItem("user"));
const isEmpty = require("is-empty");

export const initialState = user
  ? {
      isAuthenticated: false,
      // user: sessionStorage.getItem("user") || null,
      user,
      loading: false,
      isFetching: false,
      error: false,
      loggedIn: true,
    }
  : {};

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

  // useEffect(() => {
  //   sessionStorage.setItem("user", JSON.parse(state.user));
  // }, [state.user]);

  return (
    <Context.Provider
      value={{
        // state,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {this.props.children}
    </Context.Provider>
  );
};

// some test data:
// Logged in
// export const authUser = (userData) => (dispatch) =>
//   API.auth(userData).then(
//     (res) => {
//       const token = res.data;
//       sessionStorage.setItem("jwtToken", token);
//       API.setAuthToken(token);
//       const decoded = jwt.verify(token, "Secret");
//       dispatch(receiveCurrentUser(decoded));
//     },
//     (err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//   );

// Check login
// export const authSuccess = (token) => (dispatch) => {
//   if (token) {
//     API.setAuthToken(token);
//     const decoded = jwt.verify(token, "Secret");
//     console.log("decoded", decoded);
//     dispatch(setCurrentUser(decoded));
//   } else {
//     dispatch(logoutCurrentUser());
//   }
// };

// Set logged in user
// export const setCurrentUser = (decoded) => {
//   return {
//     type: RECEIVE_CURRENT_USER,
//     payload: decoded,
//   };
// };
