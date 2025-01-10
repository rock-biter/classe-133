import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

function StarsRating({ vote = 0, className = 'size-6' }) {

  className += ' text-amber-500'

  return <div className='flex'>
    {[1,2,3,4,5].map((n) => {
      return n <= vote ? 
      <StarSolid key={n} className={className} /> : 
      <StarIcon key={n} className={className} />
    })}
  </div>
}

export default StarsRating;