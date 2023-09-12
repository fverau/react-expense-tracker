import { Children, createContext } from "react";

export const Context = createContext();

const GlobalProvider = () => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
