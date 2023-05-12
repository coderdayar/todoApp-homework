import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
function TodoApp() {;
const initalValue = { new_todo: "", status: false }

  const [form, setForm] = useState(initalValue);
  const [todos, setTodos] = useState([{ new_todo: 'Spor yapmak', status: false }])
  const [filter, setFilter]=useState('all');
 

  useEffect(() => { setForm(initalValue)}, [todos])
  const handleChange = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value })

  }
  const filteredTodos=todos.filter((todo)=>{
	if(filter==='all'){
		return true;
	}else if(filter==='done'){
		return todo.status;
	}else {
		return !todo.status;
	}
  })
  const addTodo = (e) => {
    e.preventDefault();
    if (form.new_todo === "") {
      return false;
    }
    setTodos([...todos, form]);

  }

  const deleteTodo = (gid) => {
    const newTodos = [...todos];
    newTodos.splice(gid, 1);
    setTodos(newTodos)

  }

  const handleCompleteTodo=(id)=>{
  const newTodos=[...todos];
  newTodos[id].status=!newTodos[id].status;
  setTodos(newTodos);
  }

  const deleteCompleteTodos= ()=>{
	const doneCheck=todos.filter(todo=>!todo.status)
	setTodos(doneCheck)
  }

  return (
    <>
    <section class="todoapp">
	<header class="header">
		<h1>todos</h1>
		<form onSubmit={addTodo}>
			<input class="new_todo" name='new_todo' value={form.new_todo} onChange={handleChange}  placeholder="What needs to be done?" autoFocus />
		</form>
	</header>
	
	<section class="main">
		<input class="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul class="todo-list">
    {filteredTodos.map((todo, index) =>
			<li  key={index} class={!todo.status?"view":"completed"}>
				<div class="view">
					<input class="toggle" type="checkbox" checked={todo.status} onChange={()=>handleCompleteTodo(index)}/>
					<label>{todo.new_todo}</label>
					<button class="destroy"  onClick={() => deleteTodo(index)} ></button>
				</div>
			</li>
 )}
		
		</ul>
	</section>

	<footer class="footer">
		<span class="todo-count">
			<strong>{todos.length}</strong>
			items left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" class="selected" onClick={() => setFilter("all")}>All</a>
			</li>
			<li>
				<a href="#/" onClick={() => setFilter("active")} >Active</a>
			</li>
			<li>
				<a href="#/" onClick={() => setFilter("done")}>Completed</a>
			</li>
		</ul>

		<button class="clear-completed" onClick={() => deleteCompleteTodos()} >
			Clear completed
		</button>
	</footer>
</section>

<footer class="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
</>
  )}
export default TodoApp