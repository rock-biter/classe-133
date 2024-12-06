import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function DefaultLayout() {
  return (
    <div className='layout'>
      <Header />
      <p>Default layout</p>
      {/* montare il componente corrispondente alla rotta */}
      <div style={{ border: '2px solid white'}}>
        {/* <p>Qui c'era ll component Outlet</p> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}