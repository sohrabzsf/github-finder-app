import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

export const GithubContext = createContext();

export function GithubProvider({ children }) {
  const initialState = {
    loading: false,
    users: [],
    user: {},
    repos: [],
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

  async function getUser(login) {
    setLoading();

    const response = await fetch(`https://api.github.com/users/${login}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({ type: "GET_USER", payload: data });
    }
  }

  async function getRepos(login) {
    setLoading();

    const params = new URLSearchParams({ sort: "created", per_page: 10 });
    const response = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`
    );
    const data = await response.json();

    dispatch({ type: "GET_REPOS", payload: data });
  }

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
