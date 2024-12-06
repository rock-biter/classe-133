import { Link } from 'react-router-dom';

export default function Card({ pizza }) {

  const { name, id } = pizza

  return (
    <li>
      <Link to={`/pizzas/${id}`}>
        {name}
      </Link>
    </li>
  )
}