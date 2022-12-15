import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext'
import { Profile } from '../Pages/Profile';

export const Navigator = ({children}) => {
    const {loggedInUser} = useContext(UserContext);
  if(!loggedInUser.email){
    return <Navigate to='/login'/>
  } else{
    return children
  }
}
