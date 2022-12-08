import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Profile = () => {
  return (
    <>  
        <div> this is my Profile page</div>
        <Link to='myorders'>my orders</Link>
        <br/>
        <Link to='myaddress'>my address</Link>
        <br/>
        <Link to='mywishlist'>my wishlist</Link>
        <Outlet/>
    </>
  )
}
