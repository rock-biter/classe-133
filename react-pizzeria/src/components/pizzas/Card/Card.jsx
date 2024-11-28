import placeHolderImage from '../../../assets/placeholder.webp'
import Button from '../../ui/Button/Button'
import style from './Card.module.css'

export default function Card({ className = '', title = '', ingredients = [], price, image, isAvailable }) {
  // console.log('card props:',props)
  // console.log(isAvailable)

  const description = ingredients.join(', ') 
  const testo = 'ciao mamma'

  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.image}>
        {/* <img className={style.thumb} src={image} alt="" /> */}
        <img className={style.thumb} src={image || placeHolderImage} alt="" />
        {/* <img className={style.thumb} src={image ? image : placeHolderImage} alt="" /> */}
      </div>
      <div className={style.body}>
        <h3>{title}</h3>
        <p>{testo}</p>
        <p>
          <strong>Ingredients: </strong>{description}
        </p>
        <div>Prezzo: &euro; {price}</div>
        { isAvailable && <Button text='Add to cart' /> }
      </div>
    </div>
  )
}