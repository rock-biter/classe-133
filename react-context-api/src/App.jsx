import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import CountContext from './contexts/CountContext'
import TodosContext from './contexts/TodosContext'

function App() {
  const [count, setCount] = useState(0)
  const [todos,setTodos] = useState([])
  const [completedTodos,setCompletedTodos] = useState([])
  const [uncompletedTodos,setUnompletedTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
        setCompletedTodos(todos.filter(todo => todo.completed))
        setUnompletedTodos(todos.filter(todo => !todo.completed))
      })
  },[])

  return (
    <TodosContext.Provider value={{ todos, completedTodos, uncompletedTodos }}>
      <CountContext.Provider value={{ count, setCount }}>
        <Header />
        <Main />
        <Footer todos={todos} />
      </CountContext.Provider>
    </TodosContext.Provider>

  )
}

export default App
