import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const nameRef =  useRef();
    const emailRef =  useRef();
    const passwordRef =  useRef();
    const addressRef =  useRef();
    const mobileRef =  useRef();
    const navigate = useNavigate()

    const saveUser = (user) => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log('userData', userData);
        if(!userData){
            let userList = []
            userList.push(user)
            localStorage.setItem('userData', JSON.stringify(userList))
        }else{
            userData.push(user)
            localStorage.setItem('userData', JSON.stringify(userData))
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let userInfo = {}
        userInfo[nameRef.current.name] = nameRef.current.value;
        userInfo[emailRef.current.name] = emailRef.current.value;
        userInfo[passwordRef.current.name] = passwordRef.current.value;
        userInfo[addressRef.current.name] = addressRef.current.value;
        userInfo[mobileRef.current.name] = mobileRef.current.value;
        console.log(userInfo);
        saveUser(userInfo);
        navigate('/homepage')
    }

  return (
    <>
        <h3>Sign up page</h3>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" id="" ref={nameRef}/>
            <br/><br/>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="" ref={emailRef}/>
            <br/><br/>
            <label htmlFor='username'>password</label>
            <input type="text" name="password" id="" ref ={passwordRef} />
            <br/><br/>
            <label htmlFor='address'>Address</label>
            <input type="text" name="address" id="" ref={addressRef}/>
            <br/><br/>
            <label htmlFor='mobile'>Mobile</label>
            <input type="text" name="mobile" id="" ref ={mobileRef} />
            <br/><br/>
            <button>sign up</button>
        </form>
    </>

  )
}
