import Card from './pizzas/Card/Card';
// import initialPizzas from '../pizzas';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const initialFormData = {
  name: '',
  image: undefined,
  ingredients: '',
  price: '',
  isAvailable: true
}

export const API_BASE_URI = 'http://localhost:3000/'

export default function Main() {

  const [pizzas,setPizzas] = useState([])
  // const [price,setPrice] = useState('7')
  // const [name,setName] = useState('Napoli')

  const [formData,setFormData] = useState(initialFormData)

  // reagire alla modifica di una proprietà di un oggetto di stato
  useEffect(() => {
    console.log(`is Available ${formData.isAvailable}`)
  },[formData.isAvailable])

  // console.log('render del componente')

  function fetchPizzas() {
    axios.get(`${API_BASE_URI}pizzas`,{
      params: {
        ingredient: '',
        limit: 4
      },
    })
    .then(res => {
      console.log('pizzas res',res)
      setPizzas(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    fetchPizzas()
  },[])


  function handleFormData(e) {

    // console.log(e.target.name,e.target.value)
    // console.log(e.target.type,e.target.checked)
    const key = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    // con for in per duplicare l'oggetto
    // const newFormData = {}
    // for (const k in formData) {
    //   newFormData[k] = formData[k]
    // }
    // newFormData[key] = value

    // con spread in 3 passaggi
    // const newFormData = {...formData}
    // newFormData[key] = value

    // con spread in 1 solo passaggio
    const newFormData = {
      ...formData,
      [key]: value,
    }

    setFormData(newFormData)

    // console.log(newFormData)
  }

  function deletePizza(id) {
    console.log(id)
    axios.delete(`${API_BASE_URI}pizzas/${id}`)
    .then(() => {
      // setPizzas(pizzas.filter((pizza) => pizza.id !== id ))
      fetchPizzas()
    })
    .catch(err => {
      console.error(err)
      alert('Non è stato possibile eliminare la pizza selezionata.')
    })
  }

  // featch delle pizze dal server

  function addPizza(e) {
    e.preventDefault()

    // const newName = name.trim()
    // const newPrice = +price // parseInt(price)

    if(formData.name.trim() === '' || isNaN(formData.price)) return

    const newPizza = {
      ...formData,
      ingredients: formData.ingredients.split(',').map((ing) => ing.trim())
    }

    axios.post(`${API_BASE_URI}pizzas`,newPizza)
      .then(res => {
        console.log(res)
        setPizzas([...pizzas,res.data])
        setFormData(initialFormData)
      }).catch(err => {
        alert(err.response.data.messages.join(' '))
        console.error(err)
      })

    // setPizzas([...pizzas,newPizza])
    // setFormData(initialFormData) // resettare il form
    // setName('')
    // setPrice('')

    // ...

    // console.log('aggiungo una pizza')
  }

  return (
    <main>
      <section>
        <div className="container">
          <h2 className='section-title'>Le nostre pizze</h2>
          <p className='section-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat, harum molestiae nostrum provident laborum nobis doloribus perspiciatis..</p>
        </div>
        <div className="container">
          
          <form className='form-pizza' onSubmit={addPizza} action="">
            <h2>Aggiungi una nuova pizza</h2>
            {/* <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Nome della pizza' value={name} />
            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Prezzo' value={price}/> */}
            <div className='form-field'>
              <label htmlFor="name">Nome</label>
              <input id="name" name='name' onChange={handleFormData} value={formData.name} type="text" placeholder='Nome della pizza' />
            </div>
            <div className='form-field'>
              <label htmlFor="price">Prezzo</label>
              <input id="price" name='price' onChange={handleFormData} value={formData.price} type="text" placeholder='Prezzo'/>
            </div>
            <div className='form-field'>
              <label htmlFor="ingredients">Ingredienti</label>
              <input id="ingredients" name='ingredients' onChange={handleFormData} value={formData.ingredients} type="text" placeholder='Ingredienti'/>
            </div>
            <div className='form-field form-field-inline'>
              <input onChange={handleFormData} checked={formData.isAvailable} name='isAvailable' id="avalable" type="checkbox"/>
              <label htmlFor="avalable">Dipsonibilità</label>
            </div>
            <input type="submit" value='Aggiungi' />
          </form>
        </div>
        <div className="container">
          {
            pizzas.length !== 0 ? 
            <div className="row">
              {pizzas.map((pizza) => (
                <div key={pizza.id} className="col-6">
                  <Card onDelete={() => deletePizza(pizza.id)} title={pizza.name} ingredients={pizza.ingredients} price={pizza.price} image={pizza.image} isAvailable={pizza.isAvailable}/>
                </div>
              ))}
            </div> :
            <p>Non ci sono pizze</p>
          }
        </div>
      </section>
    </main>
  )
}