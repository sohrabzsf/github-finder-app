import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

export const GithubContext = createContext();

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  function setLoading() {
    dispatch({ type: "SET_LOADING" });
  }

  async function searchUsers(text) {
    setLoading();

    const params = new URLSearchParams({ q: text });
    const response = await fetch(
      `https://api.github.com/search/users?${params}`
    );
    const data = await response.json();

    dispatch({ type: "GET_USERS", payload: data.items });
  }

  function clearUsers() {
    dispatch({ type: "CLEAR_USERS" });
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
