import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let counter = 15
  const addValue = () => {
    // console.log("Value Added")
    setCnt(Math.min(cnt+1,20));
    console.log(counter);
  }
  const removeValue = () => {
    // console.log("Value Added")
    setCnt(Math.max(0,cnt-1));
    console.log(counter);
  }
  let [cnt,setCnt]=useState(counter);
  return (
    <>
      <h1>Chai aiur React</h1>
      <h2>Counter Value: {cnt}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
