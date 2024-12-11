import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

export default function Index() {

  const { categories, pizzas, fetchPizzas } = useContext(GlobalContext)

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
          <ul className='categories'>
            {categories.map((category) => (
              <li key={category}>
                <button>
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <ul className='grid grid-cols-2'>
            {pizzas.map(pizza => (
              <li key={pizza.id}>
                <Card pizza={pizza}/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}