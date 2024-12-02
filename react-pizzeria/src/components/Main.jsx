import Card from './pizzas/Card/Card';
import initialPizzas from '../pizzas';
import { useState } from 'react';

export default function Main() {

  const [pizzas,setPizzas] = useState(initialPizzas)
  const [price,setPrice] = useState('7')
  const [name,setName] = useState('Napoli')

  // featch delle pizze dal server

  function addPizza(e) {
    e.preventDefault()

    const newName = name.trim()
    const newPrice = +price // parseInt(price)

    if(newName === '' || isNaN(newPrice)) return

    const newPizza = {
      id: Date.now(),
      name: newName,
      image: undefined,
      ingredients: [],
      price: newPrice,
      isAvailable: true
    }

    setPizzas([...pizzas,newPizza])
    setName('')
    setPrice('')

    // ...

    console.log('aggiungo una pizza')
  }

  return (
    <main>
      <section>
        <div className="container">
          <h2 className='section-title'>Le nostre pizze</h2>
          <p className='section-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat, harum molestiae nostrum provident laborum nobis doloribus perspiciatis..</p>
        </div>
        <div className="container">
          <form onSubmit={addPizza} action="">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Nome della pizza' value={name} />
            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Prezzo' value={price}/>
            <input type="submit" value='Aggiungi' />
          </form>
        </div>
        <div className="container">
          {
            pizzas.length !== 0 ? 
            <div className="row">
              {pizzas.map((pizza) => (
                <div key={pizza.id} className="col-6">
                  <Card title={pizza.name} ingredients={pizza.ingredients} price={pizza.price} image={pizza.image} isAvailable={pizza.isAvailable}/>
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