import React from 'react'
import TodoApp from "./TodoApp";

{/*                 <input className="toggle" type="checkbox" checked={todo.status} onChange={()=>handleCompleteTodo(todo.id)}/>> */ }





/*  const handleCompleteTodo = (id) => {
   todos.map(todo => (
     todo.id === id ? { ...todo, status: !todo.status } : todo

   ))
   console.log(id)
 }
*/




function App() {
  return (
    <div><TodoApp/></div>
  )
}

export default App