import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/books/BookPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/books/:id' element={<BookPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
