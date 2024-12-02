import { useState } from 'react'
import todoStyle from './TodoList.module.css'
const initialTodos = ['Fare la spesa', 'Pulire casa', 'Fare il bucato']

export default function TodoList() {

  const [todos,setTodos] = useState(initialTodos)
  const [newTodo,setNewTodo] = useState('fare la pasta')

  function onTextChange(e) {
    console.log(e.target.value)

    setNewTodo(e.target.value)
  }

  function addTodo(e) {
    e.preventDefault()

    const todo = newTodo.trim() // togliere eventuali spazi prima e dopo

    if(todo === '') return

    // let newTodos = []
    // // let newTodos = todos.map(todo => todo)
    // // console.log(newTodos === todos)

    // // todos.forEach(todo => newTodos.push(todo))
    // for (let i = 0; i < todos.length; i++) {
    //   const todo = todos[i];
    //   newTodos.push(todo)
      
    // }

    // console.log(newTodos, todos)

    // newTodos.push(todo)
    // setTodos(newTodos)

    setTodos([...todos,newTodo]) // crea un nuovo array e lo setta in todos
    setNewTodo('') // resetta il form

  }

  function deleteTodo(todoText) {
    setTodos(todos.filter(todo => todo !== todoText ))
  }

  return (
    <>
      <div className={`container ${todoStyle.header}`}>
        <h1>Todos</h1>
        <form onSubmit={addTodo} action="">
          <input onChange={onTextChange} type="text" placeholder='Devo fare...' value={newTodo} />
          <input type="submit" value='Add' />
        </form>
      </div>
      <div className='container'>
        <ul className={todoStyle.todos} >
          {todos.map((todo) => (
            <li className={todoStyle.todo} key={todo}>
              <span>{todo}</span>
              <button onClick={() => deleteTodo(todo)}>Elimina</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}