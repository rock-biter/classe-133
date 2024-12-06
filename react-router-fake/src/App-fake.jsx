import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DettaglioPizza from './pages/DettaglioPizza'

function App() {

  console.log(window.location.pathname)

  const [currentPage,setCurrentPage] = useState(window.location.pathname)

  function navigate(e,page) {
    e.preventDefault()

    setCurrentPage(page)

    window.history.replaceState(null,null,page)
  }

  return (
    <>
    <header>
      <nav>
        <ul className='menu'>
          <li><a href="" onClick={(e) => navigate(e,'/')}>home</a></li>
          <li><a href="" onClick={(e) => navigate(e,'/about')}>about</a></li>
          <li><a href="" onClick={(e) => navigate(e,'/contact')}>contact</a></li>
          <li><a href="" onClick={(e) => navigate(e,'/pizzas/2')}>Dettaglio Pizza</a></li>
        </ul>
      </nav>
    </header>
      { currentPage === '/' && <Home />}
      { currentPage === '/about' && <About />}
      { currentPage === '/contact' && <Contact />}
      { currentPage === '/pizzas/:id' && <DettaglioPizza id={1} />}
    </>
  )
}

export default App
