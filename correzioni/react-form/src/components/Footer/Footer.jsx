import { classNames } from '../../lib/utilities'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={classNames('container',style.container)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate debitis fugiat vel odit, minima, aliquam voluptas officia, modi voluptatum esse ratione ad necessitatibus rem! Voluptate ipsam nostrum consequuntur quibusdam.
      </div>
    </footer>
  )
}