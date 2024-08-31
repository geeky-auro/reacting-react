import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
function TodoItem({todo}) {
    const [isTodoEditable,setIsTodoEditable]=useState(false);
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    // since we are using so much of functionality like toggling, updating , adding and deleting ,
    // so we need to bring them from App.jsx and we can do so by Using the contextAPI custom Hook
    // This hook, gives access to all the features that we require 
    const {updateTodo,deleteTodo,toggleTodo}=useTodo()

    // Now most of the aspects have been completed 
    // But remember that when we are enabling editing there was an input field that came in and 
    // it was conditionally rendered 

    const editTodo = () => {
        // To update anything we need two things first an ID and then content
        // First we spread the todo and the only thing we are updating is the String part
        updateTodo(todo.id,{...todo,todo:todoMsg})
        // Operation is perfformed 
        // Set Editable to false
        setIsTodoEditable(false)
    }

    // Note : toggle Completed will be using for visual aspects only i.e only to perform strikethrough
    // but toggleTodo will keep track of the state ;)
    const toggleCompleted = () => {
        toggleTodo(todo.id);
    }

    // Functionlaity is compeleted and now time to how we are rendering it!

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
        <input type="checkbox" className='cursor-pointer'
        checked={todo.completed} onChange={toggleCompleted} />
        <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e)=>setTodoMsg(e.target.value)} />
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={()=>{
            if(todo.completed) return 
            if(isTodoEditable){
                editTodo()
            }else{
                setIsTodoEditable((prev)=>!prev)
            }
        }}
        disabled={todo.completed}
        >{isTodoEditable?"💾":"✏️"}</button>
        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={()=>deleteTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoItem