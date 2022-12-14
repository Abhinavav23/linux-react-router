import React from 'react'
import { useParams } from 'react-router-dom';

export const User = () => {
    // reading the dynamic parameter value from URL
    const userParams = useParams();
    console.log(userParams);
    const studentData = [
        {
            id: '101',
            username: 'Abhinav',
            type: 'stu'
        },
        {
            id: '101',
            username: 'Abhinav',
            type: 'ins'
        },
        {
            id: '102',
            username: 'Shivam',
        },
    ]

    const instructorData = [
        {
            id: '101',
            username: 'Abhinav',
        },
        {
            id: '102',
            username: 'Shivam',
        },
    ]
    let user;
    if(userParams.userType === 'stu'){
        user = studentData.find((user) => user.id === userParams.userId);
        if(user) user.role = 'Student'
    } else{
        user = instructorData.find((user) => user.id === userParams.userId);
        if(user) user.role = 'Instructor'
    }
   
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