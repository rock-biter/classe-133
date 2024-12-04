import placeHolderImage from '../../../assets/placeholder.webp'
import Button from '../../ui/Button/Button'
import style from './Card.module.css'
import { API_BASE_URI } from '../../Main'

export default function Card({ onDelete = () => {}, className = '', title = '', ingredients = [], price, image, isAvailable }) {
  // console.log('card props:',props)
  // console.log(isAvailable)

  const description = ingredients.join(', ') 
  const testo = 'ciao mamma'

  function addToCart() {
    console.log(`Aggingo la pizza ${title} al carrello.`)
  }

  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.image}>
        {/* <img className={style.thumb} src={image} alt="" /> */}
        <img className={style.thumb} src={image ? API_BASE_URI + image : placeHolderImage} alt="" />
        {/* <img className={style.thumb} src={image ? image : placeHolderImage} alt="" /> */}
      </div>
      <div className={style.body}>
        <h3>{title}</h3>
        <p>{testo}</p>
        <p>
          <strong>Ingredients: </strong>{description}
        </p>
        <div>Prezzo: &euro; {price}</div>
        {/* <button onClick={onClick}>
          Add to cart
        </button> */}
        <div className={style.actions}>
          <Button callback={onDelete} className={style.delete_button} text='Delete' />
        { isAvailable && <Button callback={addToCart} text='Add to cart' /> }
        </div>
      </div>
    </div>
  )
}