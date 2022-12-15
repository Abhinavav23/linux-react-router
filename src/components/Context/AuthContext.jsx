import React, { createContext, useState } from 'react'

export const UserContext = createContext();
export const AuthContext = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        {children}
    </UserContext.Provider>
  )
}
