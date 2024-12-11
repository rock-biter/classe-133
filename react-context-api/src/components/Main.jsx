import { useContext } from 'react';
import List from './List';
import TodosContext from '../contexts/TodosContext';

export default function Main() {

  const { todos, completedTodos, uncompletedTodos } = useContext(TodosContext)

  return (
    <main>
      <section>
        <div className="container">
          <h2>Completed</h2>
          <List todos={completedTodos}/>
        </div>
        <div className="container">
          <h2>Todo</h2>
          <List todos={uncompletedTodos}/>
        </div>
      </section>
    </main>
  )
}