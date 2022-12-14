import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    let userInfo = {}
    e.preventDefault();
    userInfo[usernameRef.current.name] = usernameRef.current.value;
    userInfo[passwordRef.current.name] = passwordRef.current.value;
    console.log(userInfo); //make an api call and save data 
    navigate('/homepage');
  }

  return (
    <>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>username</label>
            <input type="text" name="username" id="" ref={usernameRef}/>
            <label htmlFor='username'>password</label>
            <input type="text" name="password" id="" ref ={passwordRef} />
            <button>Login</button>
        </form>
    </>
  )
}
