import { Link } from 'react-router-dom'

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
            <li key={pizza.id}>
              <Link to={`/pizzas/${pizza.id}`}>
                {pizza.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}