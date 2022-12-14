import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { MyOrders } from './MyOrders'

export const Profile = () => {
  return (
    <>  
        {/* <Routes>
            <Route path='/myorders' element={<MyOrders/>}/>
            <Route path='mywishlist' element={<div>My wishlist page</div>}/>
            <Route path='myaddress' element={<div>My address page</div>}/>
        </Routes> */}

        <br/>

        <div> this is my Profile page</div>

       <br/>

       <Outlet/>
            
        <Link to='myorders'>go to orders</Link>
        <br/>
        <Link to='myaddress'>my address</Link>
        <br/>
        <Link to='mywishlist'>my wishlist</Link>
        


       
        
        
    </>
  )
}
