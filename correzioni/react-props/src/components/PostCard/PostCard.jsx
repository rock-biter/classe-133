import Button from '../Button/Button';
import style from './PostCard.module.css'
import placeholder from '../../assets/placeholder.webp'
import Tags from '../tags/Tags';

export default function PostCard({ post = {} }) {

  const { 
    id,
    title,
    image,
    content,
    tags,
    // published 
  } = post

  // console.log(id, title, image, tags, content, published)



  return (
    <div className={style.card}>
      <img className={style.image} src={image || placeholder} alt="" />
      <div className={style.card_body}>
        <h3 className={style.card_title}>{title}</h3>
        <Tags tags={tags} />
        <p className={style.card_description}>{ content }</p>
        <Button />
      </div>
    </div>
  )
}