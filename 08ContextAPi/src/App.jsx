import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
/**
 * The main application component.
 * This component renders the login and profile components within a UserContextProvider.
 *
 * @returns {JSX.Element} - The rendered application component.
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Video for Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
export default App
