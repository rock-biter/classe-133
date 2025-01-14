import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import axios from 'axios';
import StarsRating from '../../components/StarsRating';
import FormReview from '../../components/FormReview';
import GlobalContext from '../../contexts/globalContext';

function BookPage() {

  // recuperare l'id del libro dal path della rotta
  const [book, setBook] = useState(null)
  const { setIsLoading } = useContext(GlobalContext)

  const { id } = useParams()

  function fetchBook() {

    setIsLoading(true)

    axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`)
    .then(res => {
      setBook(res.data)
    })
    .catch(err => {
      console.error(err)
      // qui dovremmo fare un redirect alla pagina 404
    }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchBook()
  },[id])

  return (
  book && <>
    <section>
      <div className="container flex gap-6 items-start py-3 my-3 border-b">
        <div>
          <img className='w-[100px]' src={book.image} alt="" />
        </div>
        <div>
          <h1 className='text-3xl font-bold'>{book.title}</h1>
          <div className='text-lg text-gray-600 italic font-bold'>
            {book.author}
          </div>
          <p className='text-sm'>
            {book.abstract}
          </p>
        </div>
        {/* media valutazioni con stelline */}
      </div>
    </section>
    <section>
      <div className="container flex justify-between items-center gap-4 mb-4">
        <h2 className='font-bold text-lg'>Tutte le recensioni</h2>
        <div className='flex gap-3 items-center'>
          <strong className='text-sm'>Media:</strong> <StarsRating vote={book.avg_vote} />
        </div>
      </div>
      {book.reviews.length ? 
        <ul className="container flex gap-6 flex-col">
          {book.reviews.map(review => (
            <ReviewCard review={review} key={review.id} />
          )) }
        </ul> :
        <div>Nessuna recensione</div>
        }
      <FormReview id={id} onSuccess={fetchBook} />
    </section>
    {/* form per nuova recensione */}
  </>
  )
}

export default BookPage;