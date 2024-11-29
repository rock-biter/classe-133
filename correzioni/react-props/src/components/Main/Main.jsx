import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'
import { posts } from '../../posts.js'
import Tags from '../tags/Tags.jsx'

export default function Main() {

  const publishedPosts = posts.filter((post) => post.published === true )
  const tags = []

  posts.forEach(post => {

    const postTags = post.tags
    console.log(postTags)

    postTags.forEach((tag) => {
      if(!tags.includes(tag)) {
        tags.push(tag)
      }
      // !tags.includes(tag) && tags.push(tag)
    })

  })

  console.log('tags',tags)

  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <h1 className={style.section_title}>Il mio blog</h1>
        </div>
        <div className="container">
          <Tags className={style.tags_centered } tags={tags} />
        </div>
        <div className="container">
          <div className="row">
            { publishedPosts.map((el) => (
              <div key={el.id} className="col-4">
                <PostCard post={el} />
              </div>
            ))}          
          </div>
        </div>
      </section>
    </main>
  )
}