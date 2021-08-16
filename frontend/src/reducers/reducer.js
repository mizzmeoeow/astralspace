const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_ROLE_STATE":
      return {
        ...state,
        role: action.payload,
      };
    case "LOGIN_START":
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "CREATE_POST":
      return {
        ...state,
        role: action.payload,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
