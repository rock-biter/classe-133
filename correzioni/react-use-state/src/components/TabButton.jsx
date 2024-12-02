import tabStyle from './Tabs.module.css'

export default function TabButton({ className = '' ,item, callback = () => {} }) {

  const { id, title } = item

  return (
    <button onClick={callback} className={`${tabStyle.button} ${className}`}>{title}</button>
  )

}