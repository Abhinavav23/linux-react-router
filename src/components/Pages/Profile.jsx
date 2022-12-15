import React, { useContext, useEffect } from 'react'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/AuthContext'
import { MyOrders } from './MyOrders'

export const Profile = () => {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedInUser.email){
      navigate('/login')
    }
  }, [])

  const logout = () => {
    setLoggedInUser({})
    navigate('/login')
  }
  
  return (
    <>  
        {/* <Routes>
            <Route path='/myorders' element={<MyOrders/>}/>
            <Route path='mywishlist' element={<div>My wishlist page</div>}/>
            <Route path='myaddress' element={<div>My address page</div>}/>
        </Routes> */}

        <br/>

        <h3> This is my Profile page</h3>
        <section>
          <div>Name: {loggedInUser.name}</div>
          <div>Email: {loggedInUser.email}</div>
          <div>Mobile: {loggedInUser.mobile}</div>
        </section>

       <br/>

       <Outlet/>
            
        <Link to='myorders'>go to orders</Link>
        <br/>
        <Link to='myaddress'>my address</Link>
        <br/>
        <Link to='mywishlist'>my wishlist</Link>
        <br/>
        <button onClick={logout}>Logout</button>
    </>
  )
}
