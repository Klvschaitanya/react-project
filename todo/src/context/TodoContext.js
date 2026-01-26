import { createContext ,useContext} from "react";

export const todoContext = createContext(
{
    todos:[{   id:891831319192233,
    todo:"TEST",
    completed:false
}],
addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleTodo:(id)=>{}
})

export  const useTodo =()=>{
    return useContext(todoContext)
}
 
export const TodoProvider = todoContext.Provider