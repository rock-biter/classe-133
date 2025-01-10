import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import axios from 'axios';

function HomePage() {

  // console.log(import.meta.env)

  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')

  function fetchBooks() {

    axios.get(`${import.meta.env.VITE_API_URL}/books`,{
      params: {
        search: search
      }
    })
      .then(response => {
        // console.log(response)
        setBooks(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  function searchBooks(e) {
    e.preventDefault()

    fetchBooks()
  }

  useEffect(() => {
    fetchBooks()
  },[])

  return <>
    <section>
      <div className="container py-6 flex justify-between items-end">
        <div>
          <h1 className='text-blue-950 font-bold text-3xl'>Bool Books</h1>
          <h2 className='text-lg'>La community più nerd del mondo!</h2>
        </div>
        <form onSubmit={searchBooks} className='flex gap-3'>
          <input className='border rounded-lg py-2 px-3' type="text" placeholder='Cerca libro' value={search} onChange={(e) => setSearch(e.target.value ) } />
          <button className='rounded-lg py-2 px-3 bg-blue-950 active:bg-blue-700 hover:bg-blue-800 text-white'>cerca</button>
        </form>
      </div>
    </section>
    <section>
      {books.length ? <ul className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {
          books.map(book => {
            return <li key={book.id}>
               <BookCard book={book}></BookCard>
            </li>
          })
        }
      </ul> : 
      <div className='italic text-center text-gray-500'>
        Nessun risultato
      </div>
      }
    </section>
  </>
}

export default HomePage;