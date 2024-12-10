import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { BASE_URI } from '../../config'

export default function Show() {

  const [pizza,setPizza] = useState(null)

  const { id } = useParams()
  const location = useLocation()
  console.log(location)

  const [query] = useSearchParams()
  console.log(query)

  console.log(query.get('name'))
  console.log(query.get('age'))
  // console.log(params)

  useEffect(() => {
    // fetch della pizza con id: ??
    // if(id > 3) {
    //   navigate('/404')
    // }
    axios.get(`${BASE_URI}/pizzas/${id}`)
    .then(res => {
      // console.log(res.data)
      setPizza(res.data)
    })
    .catch(err => console.error(err))

  },[id])

  const navigate = useNavigate()

  return (
    <main>
      
      <div className="container">
        <button onClick={() => navigate(-1)}>
          back
        </button>
      </div>
      <section>
        
        {pizza ? 
          <>
            <figure className='hero-pizza'>
              <img src={`${BASE_URI}/${pizza.image}`} alt="" />
            </figure>
            <div className="container">
              <h1 className="title">{ pizza.name }</h1>
              <p>Price: {new Intl.NumberFormat('it-IT',{ style: 'currency', currency: 'EUR' }).format(pizza.price)}</p>
            </div>
            <div className="container">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus eveniet voluptas dolor incidunt, animi accusantium blanditiis cupiditate officiis fugit.</p>
            </div>
          </> :
          <div>
            loading
          </div>
        }
      </section>
    </main>
  )
}