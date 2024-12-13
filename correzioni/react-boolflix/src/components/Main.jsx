import { useContext } from 'react';
import ItemList from './ItemList';
import GlobalContext from '../context/GlobalContext';

export default function Main() {

  const { movies, series } = useContext(GlobalContext)
   
  return (
    <main>
      <ItemList title='Movies' items={movies}/>
      <ItemList title='Series' items={series} />
    </main>
  )
}