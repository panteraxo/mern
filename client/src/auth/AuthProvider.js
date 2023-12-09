import { createContext, useState } from "react";
import React from 'react'
export const AuthContext = createContext()


export default function AuthProvider({children}) {
    
    const [user,setUser] = useState({id:1,role:'regular'});
    const contextValue = {
        user,
    };

  return <AuthContext.Provider value={contextValue}>
    {children}
  </AuthContext.Provider>

}
