import { useState, useEffect } from 'react'
import todoStyle from './TodoList.module.css'
import axios from 'axios'
// const initialTodos = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   }
// ]

export default function TodoList() {

  const [todos,setTodos] = useState([])
  const [filteredTodos,setFilteredTodos] = useState(todos)
  const [newTodo,setNewTodo] = useState('')
  const [search,setSearch] = useState('')

  function onTextChange(e) {
    console.log(e.target.value)

    setNewTodo(e.target.value.trim())
  }

  function fetchTodos() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`,{
      params: {
        _limit: 6,
        title_like: search
      }
    }).then(res =>{
      setTodos(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    fetchTodos()
  },[])

  function filterTodos(e) {
    e.preventDefault()

    fetchTodos()

  }

  // fetchTodos()

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

    setTodos([...todos,{
      id: Date.now(),
      title: newTodo,
      completed: false,
      userId: 1
    }]) // crea un nuovo array e lo setta in todos
    setNewTodo('') // resetta il form

  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  useEffect(() => {
    console.log('use effect')
  },[])
  
  useEffect(() => {
    console.log('Search is changed')
    setFilteredTodos(todos.filter((todo) => {
     return todo.title.toLowerCase().includes(search.toLowerCase())
    }))
  },[todos])

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
        <form onSubmit={filterTodos} action="">
         <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Filtra task' value={search}  />
        </form>
      </div>
      <div className='container'>
        {filteredTodos.length ? 
          <ul className={todoStyle.todos} >
            {filteredTodos.map((todo) => (
              <li className={todoStyle.todo} key={todo.id}>
                <span>{todo.title}</span>
                <button onClick={() => deleteTodo(todo.id)}>Elimina</button>
              </li>
            ))}
          </ul> :
          <div>
            Nessuna Todos trovata
            {/* <button onClick={fetchTodos}>Carica todos</button> */}
          </div>
        }
      </div>
    </>
  )
}