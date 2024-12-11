import { useContext } from 'react'
import CountContext from '../contexts/CountContext'
import TodosContext from '../contexts/TodosContext'

export default function Footer() {

  const { setCount } = useContext(CountContext)
  const { uncompletedTodos } = useContext(TodosContext)

  // console.log('context in footer',value)

  return (
    <footer className='footer'>

      <div>
        Ci sono {uncompletedTodos.length} todos da completare
      </div>

      <div className="container">
        <p>Gianluca Lomarco</p>
        <p>P.iva 15648798463541</p>
        <p>Via di la, non so dove 245978</p>
      </div>
      <div className="container">
        Fatto con tnato ammoree
        <button onClick={() => { setCount((count) => count + 1) }}>incrementa</button>
      </div>
    </footer>
  )
}