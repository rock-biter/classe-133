import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

function Header() {
  return <header className='bg-blue-500 text-white py-6'>
      <div className="container flex justify-between items-center">
        <Link to='/'>
          <img className='w-10 h-10' src="http://localhost:3000/logo.png" alt="" />
        </Link>
        <Nav />
      </div>
    </header>
}

export default Header;