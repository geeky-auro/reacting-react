import { createContext,useContext} from "react";

export const TodoContext = createContext({
    todos: [
        // Here we specifiy how each of our context looks like
        {
            id:1,
            todo: "Todo Message",
            completed: false
        }
    ],
    // Here add the defn only not the actual implementation
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
})


export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider
