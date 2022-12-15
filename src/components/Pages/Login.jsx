import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

export const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [showInvalidUser, setShowInvalidUser] = useState(false);
  const [showPassowrdError, setShowPassowrdError] = useState(false);
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  const validateUser = (userInfo) => {
   const userList = JSON.parse(localStorage.getItem('userData'));
  //  find the user using email
  // [1,2,3,4,5]
   const userFromLocalStorage =  userList.find((user) => {
    return user.email === userInfo.email
   })
   if(userFromLocalStorage){
    setShowInvalidUser(false);
    console.log(userFromLocalStorage);
    if(userFromLocalStorage.password === userInfo.password){
      console.log('test');
      setLoggedInUser(userFromLocalStorage);
      navigate('/homepage');
    }else{
      setShowPassowrdError(true);
    }
   }else{
    setShowInvalidUser(true);
   }
  }

  const onSubmit = (e) => {
    let userInfo = {}
    e.preventDefault();
    userInfo[usernameRef.current.name] = usernameRef.current.value;
    userInfo[passwordRef.current.name] = passwordRef.current.value;
    // console.log(userInfo); //make an api call and save data 
    validateUser(userInfo);
  }

  return (
    <>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Emmail: </label>
            <input type="text" name="email" id="" ref={usernameRef}/>
            <br/><br/>
            <label htmlFor='username'>password: </label>
            <input type="text" name="password" id="" ref ={passwordRef} />
            <br/><br/>
            <button>Login</button>
        </form>
        {showInvalidUser && <>  <h3 style={{color: 'red'}}>you are not a user, please signup first</h3>
        <button onClick={() => navigate('/signup')}>signup</button>
        </>}
        {showPassowrdError && <h3 style={{color: 'red'}}>password doesnt match</h3>}
    </>
  )
}
