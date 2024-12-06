import { useEffect } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function DettaglioPizza() {

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
  },[])

  const navigate = useNavigate()

  return (
    <main>
      <section>
        <button onClick={() => navigate(-1)}>
          back
        </button>
        <h1>Ecco la piazza con id: { id }</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus eveniet voluptas dolor incidunt, animi accusantium blanditiis cupiditate officiis fugit.</p>
      </section>
    </main>
  )
}