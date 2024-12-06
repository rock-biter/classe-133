import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {

  const pizzas = [
    {
      id: 1,
      name: 'Margerita',
    },
    {
      id: 2,
      name: 'Marinara',
    },
    {
      id: 3,
      name: 'Bufalina',
    }
  ]

  return (
    <main>
      <section>
        <h1>Queste è la home page</h1>

        <ul>
          {pizzas.map(pizza => (
            <Card key={pizza.id} pizza={pizza}/>
          ))}
        </ul>
      </section>
    </main>
  )
}