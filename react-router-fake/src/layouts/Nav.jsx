import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}