import axios from 'axios'
import { useState } from 'react'
import { BASE_URI } from '../../config'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
  name: '',
  price: '',
  ingredients: '',
  isAvailable: false,
  image: ''
}

export default function Create() {

  const [formData,setFormData] = useState(initialFormData)

  const navigate = useNavigate()

  function handleFormData(e) {
    console.log(e)

    const key = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [key]: value
    })

  }

  function savePizza(e) {
    // disabilito l'invio di default del form
    e.preventDefault()

    console.log('salva i dati sul server')

    const body = {
      ...formData,
      ingredients: formData.ingredients.split(',').map(ingredient => ingredient.trim())
    }
    console.log(body)

    axios.post(`${BASE_URI}/pizzas`,body)
    .then(res => {
      const newPizza = res.data
      console.log(newPizza)

      navigate(`/pizzas/${newPizza.id}`)

    }).catch(err => console.error(err))

  }

  return (
    <main>
      <section>
        <div className='container'>
          <h1 className='title'>Nuova pizza</h1>
        </div>
        <div className="container">
          <form  onSubmit={savePizza}>
            <p className='form-group'>
              <label htmlFor="name">Nome</label>
              <input onChange={handleFormData} type="text" id='name' name='name' placeholder='Nome della piazza' value={formData.name} />
            </p>
            <p className='form-group'>
              <label htmlFor="image">Immagine</label>
              <input onChange={handleFormData} type="text" id='image' name='image' placeholder='URL immagine della pizza' value={formData.image} />
            </p>
            <p className='form-group'>
              <label htmlFor="price">Prezzo</label>
              <input onChange={handleFormData} type="text" id='price' name='price' placeholder='Prezzo di vendita' value={formData.price} />
            </p>
            <p className='form-group-checkbox'>
              <input onChange={handleFormData} type="checkbox" checked={formData.isAvailable} id='is-available' name='isAvailable' placeholder='Nome della piazza' />
              <label htmlFor="is-available">Disponibilità</label>
            </p>
            <p className='form-group'>
              <label htmlFor="ingredients">Ingredienti</label>
              <input onChange={handleFormData} type="text" id='ingredients' name='ingredients' placeholder='Inserisci gli ingredienti' value={formData.ingredients} />
              <small>Separa gli ingredienti usando la virgola (,)</small>
            </p>
            <button>Salva</button>
          </form>
        </div>
      </section>
    </main>
  )
}