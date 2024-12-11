import { useContext } from 'react'
import placeHolderImage from '../../assets/placeholder.webp'
import { BASE_URI } from '../../config'
import DeletePizza from '../pizzas/DeletePizza'
// import Button from '../../ui/Button/Button'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'

export default function Card({ className, pizza = {} }) {
  // console.log('card props:',props)
  // console.log(isAvailable)
  const { fetchPizzas } = useContext(GlobalContext)

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
        <div className={style.header}>
          <h3>
            {name}
          </h3>
          <DeletePizza onDelete={fetchPizzas} id={id} />
        </div>
        <p>{testo}</p>
        <p>
          <strong>Ingredients: </strong>{description}
        </p>
        <div>Prezzo: &euro; {price}</div>
        {/* <button onClick={onClick}>
          Add to cart
        </button> */}
        <div className={style.actions}>
        </div>
        <Link className='link' to={`/pizzas/${id}`}>Vai alla pagina di dettaglio</Link>
      </div>
    </div>
  )
}