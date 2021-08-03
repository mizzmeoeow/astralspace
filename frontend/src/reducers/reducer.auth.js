import {
  SET_CURRENT_USER,
  USER_LOADING,
  SET_SEARCH_TERM,
} from "../actions/action.types";

const isEmpty = require("is-empty");

const initialState = {
  term: null,
  isAuthenticated: false,
  user: {},
  loading: false,
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

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
