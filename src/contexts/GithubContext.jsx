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

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading }}
    >
      {children}
    </GithubContext.Provider>
  );
}
