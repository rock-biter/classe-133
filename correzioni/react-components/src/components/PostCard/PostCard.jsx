import Button from '../Button/Button';
import style from './PostCard.module.css'
import imagePost from '../../assets/copertina-post.png'

export default function PostCard() {
  return (
    <div className={style.card}>
      <img className={style.image} src={imagePost} alt="" />
      <div className={style.card_body}>
        <h3 className={style.card_title}>Titolo del post</h3>
        <p className={style.card_description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident fuga quas eligendi deleniti officiis sint minus sed nemo perspiciatis.</p>
        <Button />
      </div>
    </div>
  )
}