import style from './Tags.module.css'


export default function Tags({ className, tags = []}) {

  // const tagColors = {
  //   html: '#ff0000',
  //   css: '#0000ff',
  //   js: '#ffff00',
  //   php: '#ff00ff'
  // }

  return (
    <ul className={ `${style.tags} ${className}`}>
      {tags.map((tag) => (
        // <li style={{ backgroundColor: tagColors[tag] }} className={`${style.tag_item}`} key={tag}>{tag}</li>
        <li className={`${style.tag_item} ${style[tag]}`} key={tag}>{tag}</li>
      ))}
    </ul>
  )
}