import React from 'react'
import { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
  const {user} =useContext(userContext)
  if(!user) return <h1> Not Logged IN</h1>
  return (
    <div>Profile : {user.username}</div>
    
  )
}

export default Profile