import { createContext, useContext } from "react";

export const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
