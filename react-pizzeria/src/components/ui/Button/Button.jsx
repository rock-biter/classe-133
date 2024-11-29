import style from './Button.module.css'

export default function Button({ callback, className = '', dark = false , text = 'Testo pulsante' }) {

  // console.log(callback)
  // function onClick() {
  //   console.log('add to cart')
  // }

  return (
    <button onClick={callback} className={`${style.button} ${ dark === true ? style.dark_button : style.light_button } ${className}`}>
      {text}
    </button>
  )
}