import Button from '../../components/ui/Button/Button'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        qui c&apos;è il footer
      </div>
      <div className="container">
        <Button text='Seguici' />
      </div>
    </footer>
  )
}