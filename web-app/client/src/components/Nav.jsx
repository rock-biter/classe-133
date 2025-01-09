import { NavLink } from 'react-router-dom';

function Nav() {

  const menu = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ]

  return <nav>
    <ul className='flex items-center gap-4'>
      {
        menu.map(({path, label}, i) => {
          return <li key={i}>
            <NavLink className='py-2 px-3 hover:text-blue-950' to={path}>
              {({ isActive }) => {
                return <span className={ isActive ? 'text-blue-950' : ''}>{
                  label
                }</span>
              }}
            </NavLink>
          </li>
        })
      }
    </ul>
  </nav>
}

export default Nav