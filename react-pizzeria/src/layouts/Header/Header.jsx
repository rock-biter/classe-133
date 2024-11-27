import Button from '../../components/ui/Button/Button'
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        La nostra pizzeria

        <Button />
      </div>
    </header>
  )
}