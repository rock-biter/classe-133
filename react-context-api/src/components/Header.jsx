import { useContext } from 'react'
import CountContext from '../contexts/CountContext'

export default function Header() {

  // const value = useContext(CountContext)
  const { count } = useContext(CountContext)

  // console.log('context in header:',value)

  return (
    <header className='header'>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Todos ({ count })</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}