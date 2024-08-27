import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    
    const {setUser} = useContext(userContext)
    
    const handleSubmit = (e) =>{
        // handle Login Functionality
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input type="password" value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login