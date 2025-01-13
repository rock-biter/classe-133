import { useState } from 'react'
import axios from 'axios'
import { ArrowPathIcon } from '@heroicons/react/24/outline' 

const initialFormData = {
  vote: 1,
  name: '',
  text: ''
}

function FormReview({ id, onSuccess = () => {} }) {

  const [formData,setFormData] = useState(initialFormData)
  const [isFormValid,setIsFormValid] = useState(true)

  function onFormChange(e) {
    const { value, name: propName } = e.target
    console.log(value, propName)

    // const newFormData = {
    //   ...formData
    // }
    // newFormData[propName] = value

    setFormData({
      ...formData,
      [propName]: value // vote: 3
    })
    // setFormData(e.target.value)

  }

  function storeReview(e) {
    e.preventDefault()
    setIsFormValid(true)
    console.log('salva la review sul server')
    const data = {
      text: formData.text.trim() || undefined,
      name: formData.name.trim(),
      vote: parseInt(formData.vote)
    }

    // validazione lato client
    if(!data.name || !data.vote || data.vote < 1 || data.vote > 5) {
      console.log('form is not valid')
      setIsFormValid(false)
      return
    }

    axios.post(`${import.meta.env.VITE_API_URL}/books/${id}/reviews`,data)
    .then(res => {
      console.log(res)
      // se la chiamata va a buon fine dovremmo refetchare il book
      // e resettare il form
      setFormData(initialFormData)
      onSuccess()
    }).catch(err => {
      console.log(err)
      setIsFormValid(false)
    })
  }

  return (
    <div className="container border my-6 rounded-lg">
        <div className='border rounded-lg'>
          <div className=' bg-gray-200 px-4 py-2'>
            <strong>
              Aggiungi recensione
            </strong>
          </div>
        </div>
        <div className='p-4'>
          <form onSubmit={storeReview} className={`flex flex-col gap-3 ${!isFormValid ? 'animate__animated animate__shakeX': ''}`}>
            <p className='form-control'>
              <label htmlFor="name">Nome *</label>
              <input required type="text" placeholder='Anonymous' name='name' id='name' value={formData.name} onChange={onFormChange} />
            </p>
            <p className='form-control'>
              <label htmlFor="text">Recensione</label>
              <textarea rows="4" name="text" id="text" placeholder='Scrivi la tua recensione' value={formData.text} onChange={onFormChange}></textarea>
            </p>
            <p className='form-control'>
              <label htmlFor="vote">Voto *</label>
              <select required name="vote" id="vote" value={formData.vote} onChange={onFormChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <div className='flex gap-4 items-center'>
              {isFormValid === false && <div className=' text-red-500'>I dati non sono validi</div>}
              <button className='ml-auto bg-blue-950 hover:bg-blue-800 text-white h-10 rounded-lg px-6 flex gap-1 items-center'>Invia 
                {/* <ArrowPathIcon className='size-4 spin' /> */}
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default FormReview