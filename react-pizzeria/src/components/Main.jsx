import Card from './pizzas/Card/Card';
import pizzas from '../pizzas';

export default function Main() {


  // featch delle pizze dal server

  return (
    <main>
      <section>
        <div className="container">
          <h2 className='section-title'>Le nostre pizze</h2>
          <p className='section-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat, harum molestiae nostrum provident laborum nobis doloribus perspiciatis..</p>
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