import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Filters() {

  const { query, setQuery, fetchData } = useContext(GlobalContext)

  function onChange(e) {
    setQuery(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    // qui dobbiamo fare la chiatama a TMDB
    fetchData()

  }

  
  return (
    <form onSubmit={onSubmit}>

      <label htmlFor="query">Cerca</label>
      <input type="text" name='query' onChange={onChange} value={query} id='query' placeholder='Cerca ...' />
      <button>Cerca</button>

    </form>
  )
}