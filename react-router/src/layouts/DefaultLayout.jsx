import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function DefaultLayout() {
  return (
    <div className='layout'>
      <Header />
      {/* montare il componente corrispondente alla rotta */}
      {/* <p>Qui c'era ll component Outlet</p> */}
      <Outlet />
      <Footer />
    </div>
  )
}