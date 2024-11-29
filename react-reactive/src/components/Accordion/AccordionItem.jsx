import { useState } from 'react'
import style from './Accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function AccordionItem({ onToggle = () => {}, item, isOpen = false }) {

  const { title, content } = item

  return (
    <div onClick={onToggle} className={style.item}>
      <div className={style.header}>
        <span className={style.title}>{title}</span>
        <span className={style.icon}>
          {/* { isOpen ? '-' : '+' } */}
          {/* <FontAwesomeIcon icon={faPlus} /> */}
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </span>
      </div>
      {isOpen && <div className={style.content}>
        {content}
      </div>}
    </div>
  )
}

// VERSIONE CON APERTURA INDIPENDENTE DEGLI ITEM
// export default function AccordionItem({ item }) {

//   const [isOpen,setIsOpen] = useState(false)
//   const { title, content } = item

//   function onToggle() {
//     setIsOpen( !isOpen )
//   }

//   return (
//     <div onClick={onToggle} className={style.item}>
//       <div className={style.header}>
//         <span className={style.title}>{title}</span>
//         <span className={style.icon}>
//           { isOpen ? '-' : '+' }
//         </span>
//       </div>
//       {isOpen && <div className={style.content}>
//         {content}
//       </div>}
//     </div>
//   )
// }