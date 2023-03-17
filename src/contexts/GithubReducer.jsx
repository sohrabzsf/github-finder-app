function GithubReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "GET_USERS":
      return { ...state, loading: false, users: action.payload };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    case "GET_USER":
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
}

export default GithubReducer;
