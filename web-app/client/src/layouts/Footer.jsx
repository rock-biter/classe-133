import { Link } from 'react-router-dom';

function Footer() {
  return <footer className='bg-blue-950 text-white py-20'>
    <div className="container">
      <Link to="/" className='underline hover:text-gray-300'>Torna alla Home</Link>
    </div>
  </footer>
}

export default Footer;