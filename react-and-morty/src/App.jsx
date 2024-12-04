import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [characters,setCharacters] = useState([])
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState([])


  function fetchCharacters() {
    axios.get('https://rickandmortyapi.com/api/character',{
      params: {
        page: page
      }
    })
    .then(res => {
      console.log(res)
      setCharacters(res.data.results)
      setTotalPages(new Array(res.data.info.pages).fill(0))
    })
    .catch(err => {
      console.error(err)
      setCharacters([])
      setTotalPages([])
    })
  }

  useEffect(() => {
    fetchCharacters()
  },[page])

  return (
    <>
     <main>
      <section className='section'>
        <div className="container">
          <h1 className='title'>Rick and Morty</h1>
        </div>
        <div className="container">
          <ul className='characters'>
            {characters.map((character) => (
              <li className='character' key={character.id}>
                <figure>
                  <img src={character.image} alt="" />
                </figure>

                <div>
                  <h2>{character.name}</h2>
                  <p>Specie: {character.species}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <ul className='pagination'>
            {totalPages.map((el,i) => {
              console.log('page',el,i)
              const pageNumber = i + 1 

              return <li onClick={() => setPage(pageNumber)} className={ pageNumber === page ? 'page active' : 'page' } key={i}>{ pageNumber }</li>
            })}
            {/* <li onClick={() => setPage(43)} className={ 43 === page ? 'page active' : 'page' } key={42}>43</li> */}
          </ul>
        </div>
      </section>
     </main>
    </>
  )
}

export default App
