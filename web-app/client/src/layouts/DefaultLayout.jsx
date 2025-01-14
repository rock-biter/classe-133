import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from '../components/Loader';
import { useContext } from 'react';
import GlobalContext from '../contexts/globalContext';

function DefaultLayout() {

  const { isLoading } = useContext(GlobalContext)
  // console.log(value)

  return <>
    <Header />
    <main className='grow'>
      <Outlet />
    </main>
    <Footer />
    {/* loader */}
    {isLoading && <Loader />}
  </>
}

export default DefaultLayout;