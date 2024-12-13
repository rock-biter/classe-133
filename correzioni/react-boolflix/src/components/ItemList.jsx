import Card from './Card';

export default function ItemList({ items = [], title }) {
  
  return(
    <section>
      <div className="container">
        <h2>{ title }</h2>
      </div>
      <div className="container">
        <ul className='grid'>
          {items.map((item) => (
            <li key={item.id}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}