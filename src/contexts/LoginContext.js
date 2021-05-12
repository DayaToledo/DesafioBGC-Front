import { useContext, createContext } from "react";

export const LoginContext = createContext(null);

export function useAppContext() {
    return useContext(LoginContext);
}