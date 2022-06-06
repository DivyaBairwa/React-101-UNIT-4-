import React, { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const[Auth,Authset]=useState(false)
    
  const Login=()=>{
     Authset(true)
      
    
  }
  const Logout=()=>{
           Authset(false)
  }
  return <AuthContext.Provider value={{Auth,Login,Logout}}>{children}</AuthContext.Provider>;
};
