import Card from './pizzas/Card/Card';
import pizzas from '../pizzas';

export default function Main() {
  return (
    <main>
      <section>
        <div className="container">
          <h2 className='section-title'>Le nostre pizze</h2>
          <p className='section-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat, harum molestiae nostrum provident laborum nobis doloribus perspiciatis..</p>
        </div>
        <div className="container">
          <div className="row">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="col-6">
                <Card />
              </div>
            ))}
            {/* <div className="col-6">
              <Card />
            </div>
            <div className="col-6">
              <Card />
            </div>
            <div className="col-6">
              <Card />
            </div>
            <div className="col-6">
              <Card />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}