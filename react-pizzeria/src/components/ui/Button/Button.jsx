import style from './Button.module.css'

export default function Button({ className = '', dark = false , text = 'Testo pulsante' }) {
  return (
    <button className={`${style.button} ${ dark === true ? style.dark_button : style.light_button } ${className}`}>
      {text}
    </button>
  )
}