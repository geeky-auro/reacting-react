import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo)=>
      (prevTodo.id === todo.id?todo:prevTodo)
    ))
  }

  const deleteTodo = (id) =>{
    // I want all the todos which doesn't match the ID ;)
    // Note: Filter always works for the true condition
    // Whose Id is matching we need to remove that and whose ID is not matching we need to remove that
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=>
      // I dont wan't to go inside every object only inside those object whose ID matches
    // {...prevTodo,completed:!prevTodo.completed} => This means first we are spreading this out then we are updating that specific Todo
      prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo
    )
  )
  }
  // As soon as the component loads query the localStorage get me all the data and let's push all the todos to the state known as setTodos
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("toods"))
    // There might not be any data in todos, so let's handle this optionally
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])
 
  useEffect(()=>{
    // Remember local storage always acceps String only not Array or Objects
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
       {/* <TodoForm />
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            <TodoItem todo={todo}/>
          </div>
        ))
      }   */}
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
