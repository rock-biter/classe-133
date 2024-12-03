import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'
import { posts } from '../../posts.js'
import Tags from '../tags/Tags.jsx'
import { useState } from 'react'
import Button from '../Button/Button.jsx'

export default function Main() {

  const [publishedPosts, setPublishedPosts ] = useState(posts.filter((post) => post.published === true ))
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

  const [title,setTitle] = useState('')

  function addPost(e) {
    e.preventDefault()

    const newTitle = title.trim()
    if(newTitle === '') return

    const post = {
      id: Date.now(),
      title,
      image: undefined /* compila questo campo */,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: [],
      published: true,
    }

    setPublishedPosts([...publishedPosts,post])
    setTitle('')

  }

  function deletePost(id) {

    setPublishedPosts(publishedPosts.filter(post => post.id !== id ))

  }

  // console.log('tags',tags)

  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <form onSubmit={addPost} action="" className='inline-form'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Titolo del post' />
            <Button text='Salva' /> 
          </form>
        </div>
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
                <PostCard onDelete={() => deletePost(el.id)} post={el} />
              </div>
            ))}          
          </div>
        </div>
      </section>
    </main>
  )
}