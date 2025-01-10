import StarsRating from './StarsRating';

function ReviewCard({ review }) {

  const { vote, name, text } = review
  return (
    <div className='border py-3 px-4 rounded-lg'>
      <p className='text-sm'>{ text }</p>
      <div className='flex gap-3 my-3 text-xs items-center'>
        <strong>Voto</strong>
         <StarsRating vote={vote} className='size-4' />
      </div>
      <div className='text-xs italic font-light'>
        By { name }
      </div>
    </div>
  )

}

export default ReviewCard;