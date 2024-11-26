import './App.css'

function App() {

  const title = "Hello world!"
  let count = 0
  const names = ['Giangi','Anna','Giuseppe','Carmen']
  const user = {
    name: 'Giangi',
    age: 34
  }

  // function getListItem() {
  //   const items = []

  //   names.forEach((name) => {
  //     items.push(<li key={name}>{name}</li>)
  //   })

  //   return items
  // }

  return (
    <div>
      <h1>{title}</h1>
      <div>
        Counter: {count}
      </div>

      <div>
        {user.age}
      </div>

      <ul>
        {names.map((el) => (
          <li className='list-item' key={el}>
            <span>{el}</span>
            <span>elimina</span>
          </li>
        ))}
        {/* {getListItem()} */}
      </ul>
    </div>
  )
}

export default App
