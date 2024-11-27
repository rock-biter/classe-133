import image from '../../../assets/margherita.webp'
import Button from '../../ui/Button/Button'
import style from './Card.module.css'

export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img className={style.thumb} src={image} alt="" />
      </div>
      <div className={style.body}>
        <h3>Margherita</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>Prezzo: &euro; 6,00</div>
        <Button />
      </div>
    </div>
  )
}