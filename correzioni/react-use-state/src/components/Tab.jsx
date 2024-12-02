import tabStyle from './Tabs.module.css'

export default function Tab({ item }) {

  const { description, title } = item

  return (
    <div className={tabStyle.tab}>
      <strong className={tabStyle.title}>{title}</strong>
      <p className={tabStyle.description}>
        { description }
      </p>
    </div>
  )

}