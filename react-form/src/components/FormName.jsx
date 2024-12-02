import { useState } from 'react'

export default function FormName() {
  const [name, setName] = useState('Giangi')

  function onSubmit(event) {
    event.preventDefault() // blocca l'invio nativo del form
    console.log(`Name: ${name}`)
  }

  function onChange(event) {
    console.log(event)
    setName(event.target.value)
  }

  return (
    <>
      <div className="container">
        <h1>Form intro</h1>
      </div>
      <div className='container'>
        ciao: {name}
      </div>
      <div className="container">
        <form onSubmit={onSubmit} action="">
          <input onChange={onChange} type="text" placeholder='Il tuo nome' value={name} />
          <input type="submit" value='Invia'/>
        </form>
      </div>
    </>
  )
}