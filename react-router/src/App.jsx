import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PizzasShow from './pages/pizzas/Show'
import PizzasIndex from './pages/pizzas/Index'
import PizzasCreate from './pages/pizzas/Create'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/NotFound'
import BlankLayout from './layouts/BlankLayout'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/contact' Component={Contact} ></Route>
            <Route path='/pizzas' >
              <Route index Component={PizzasIndex}></Route>
              {/* <Route path='' Component={PizzasIndex}></Route> */}
              <Route path=':id' Component={PizzasShow} ></Route>
              <Route path='create' Component={PizzasCreate} ></Route>
              {/* <Route path='/pizzas/' Component={DettaglioPizza} ></Route>
              <Route path='/pizzas/create' Component={DettaglioPizza} ></Route> */}
            </Route>
            {/* <Route path='/pizzas/ciao' Component={About} ></Route> */}
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' Component={NotFound} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
