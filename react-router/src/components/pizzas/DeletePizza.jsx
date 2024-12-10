import axios from 'axios'
import { BASE_URI } from '../../config'

export default function DeletePizza({ onDelete = () => {}, id }) {

  function deletePizza() {
    // chiediamo la conferma prima di fare la chiamata al server
    if(confirm('Vuoi davvero eleiminare questa pizza?')) {
      console.log('delete pizza',id)
      // qui faccia la chiamata con azios all'API destroy
      axios.delete(`${BASE_URI}/pizzas/${id}`)
      .then(() => {
        // se siamo n
        console.log('invochiamo al funzione on delete')
        onDelete()
      })
      .catch(err => {
        alert('non è stato possibile eliminare questa pizza')
        console.err(err)
      })
      // se l'eliminazione va a buon fine
        // invochiamo la callback onDelete
    }
    
  }

  return (
    <button onClick={deletePizza}>Delete</button>
  )

}