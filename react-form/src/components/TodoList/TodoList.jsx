import { useState, useEffect } from 'react'
import todoStyle from './TodoList.module.css'
const initialTodos = ['Fare la spesa', 'Pulire casa', 'Fare il bucato']

export default function TodoList() {

  const [todos,setTodos] = useState(initialTodos)
  const [filteredTodos,setFilteredTodos] = useState(todos)
  const [newTodo,setNewTodo] = useState('')
  const [search,setSearch] = useState('')

  function onTextChange(e) {
    console.log(e.target.value)

    setNewTodo(e.target.value.trim())
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

  useEffect(() => {
    console.log('use effect')
  },[])
  
  useEffect(() => {
    console.log('Search is changed')
    setFilteredTodos(todos.filter((todo) => {
     return todo.toLowerCase().includes(search.toLowerCase())
    }))
  },[todos, search])

  return (
    <>
      <div className={`container ${todoStyle.header}`}>
        <h1>Todos</h1>
        <form onSubmit={addTodo} action="">
          <input onChange={onTextChange} type="text" placeholder='Devo fare...' value={newTodo} />
          <input type="submit" value='Add' />
        </form>
      </div>
      <div className="container">
         <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Filtra task' value={search}  />
      </div>
      <div className='container'>
        <ul className={todoStyle.todos} >
          {filteredTodos.map((todo) => (
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