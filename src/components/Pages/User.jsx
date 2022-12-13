import React from 'react'
import { useParams } from 'react-router-dom';

export const User = () => {
    // reading the dynamic parameter value from URL
    const userParams = useParams();
    console.log(userParams);
    const userData = [
        {
            id: '101',
            username: 'Abhinav',
            role: 'Ins'
        },
        {
            id: '102',
            username: 'Shivam',
            role: 'stu'
        },
    ]
    let user;
   user = userData.find((user) => user.id === userParams.userId);
    // console.log(user);
    if(!user) {
        user = {
            username: 'default',
            role: 'Default'
        }
    }
  return (
    <>
        <h1>User Details</h1>
        <div>Name: {user.username}</div>
        <div>Role: {user.role}</div>
    </>

  )
}


// userData = [
//     {
//         username: 'abhinavKr',
//         email: 'abhinav@mail',
//         password: '12345',
//         name: 'Abhinav',
//         role: 'Ins'
//     }
// ]

// const loginInfo = {
//     username: 'abhinavKr',
//     password: '12345'
// }