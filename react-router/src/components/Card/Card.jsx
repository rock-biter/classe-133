import placeHolderImage from '../../assets/placeholder.webp'
import { BASE_URI } from '../../config'
// import Button from '../../ui/Button/Button'
import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ onDelete = () => {}, className, pizza = {} }) {
  // console.log('card props:',props)
  // console.log(isAvailable)
  const { ingredients = [], name, image, price, isAvailable, id } = pizza

  const description = ingredients.join(', ') 
  const testo = 'ciao mamma'

  // function addToCart() {
  //   console.log(`Aggingo la pizza ${title} al carrello.`)
  // }

  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.image}>
        {/* <img className={style.thumb} src={image} alt="" /> */}
        <img className={style.thumb} src={image ? `${BASE_URI}/${image}` : placeHolderImage} alt="" />
        {/* <img className={style.thumb} src={image ? image : placeHolderImage} alt="" /> */}
      </div>
      <div className={style.body}>
        <h3>{name}</h3>
        <p>{testo}</p>
        <p>
          <strong>Ingredients: </strong>{description}
        </p>
        <div>Prezzo: &euro; {price}</div>
        {/* <button onClick={onClick}>
          Add to cart
        </button> */}
        <div className={style.actions}>
          {/* <Button callback={onDelete} className={style.delete_button} text='Delete' /> */}
        {/* { isAvailable && <Button callback={addToCart} text='Add to cart' /> } */}
        </div>
        <Link to={`/pizzas/${id}`}>Vai alla pagina di dettaglio</Link>
      </div>
    </div>
  )
}