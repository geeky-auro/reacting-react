import React, { useState } from 'react'
import {useTodo} from '../contexts/TodoContext'
function TodoForm() {
    // First we need to track what user is wrting for 
    const [todo,setTodo] = useState("")
    const {addTodo}=useTodo()
    const add = (e) => {
        // It takes care that it is not submitted anywhere
        e.preventDefault()
        if(!todo) return 
        addTodo({todo,completed:false})
        // the addition is done we need to reset the state so that everything gets cleared
        setTodo("")
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text" placeholder='Write Todo...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type="submit"
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >ADD</button>
    </form>
  )
}

export default TodoForm