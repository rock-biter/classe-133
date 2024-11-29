import AccordionItem from './AccordionItem';
import style from './Accordion.module.css'
import { useState } from 'react';

export default function AccordionList({ items = [] }) {

  const [currentId,setCurrentId] = useState(null)

  function toggle(id) {
    setCurrentId( currentId === id ? null : id )
  }

  return (
    <div className={style.wrapper}>
      { items.map((el) => <AccordionItem key={el.id} item={el} isOpen={currentId === el.id} onToggle={() => toggle(el.id)} />)}
    </div>
  )

}
