import React from "react";
import { createContext, useState } from "react";
export const AuthContext = createContext();

export default function UseContextProvider({children}) {
  let username = "Mahad";
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{ loggedIn,setLoggedIn, username}}>
      {children}
    </AuthContext.Provider>
  );
}
