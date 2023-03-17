import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  function setAlert(message, type) {
    dispatch({ type: "SET_ALERT", payload: { message, type } });

    setTimeout(() => dispatch({ type: "CLEAR_ALERT" }), 3000);
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
