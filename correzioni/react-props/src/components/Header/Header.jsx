import { classNames } from '../../lib/utilities'
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={ classNames('container',style.nav_container)  }>
        <a href="#">Logo</a>
        
        <nav>
          <ul className={style.menu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pizzas</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}