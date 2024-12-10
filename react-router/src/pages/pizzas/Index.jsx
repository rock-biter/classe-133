import { useEffect, useState } from 'react';
import axios from 'axios'
import { BASE_URI } from '../../config';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export default function Index() {

  const [pizzas,setPizzas] = useState([])

  function fetchPizzas() {
    axios.get(`${BASE_URI}/pizzas`)
    .then(res => {
      setPizzas(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    fetchPizzas()
  },[])

  return (
    <main>
      <section>
        <div className='container'>
          <h1 className='title'>Le nostre pizze</h1>
          <Link className='link' to="/pizzas/create">Nuova pizza</Link>
        </div>
        <div className="container">
          <ul className='grid grid-cols-2'>
            {pizzas.map(pizza => (
              <li key={pizza.id}>
                <Card onDelete={() => fetchPizzas()} pizza={pizza}/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}