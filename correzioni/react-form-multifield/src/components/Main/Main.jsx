import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'
import { initialPosts  } from '../../posts.js'
import Tags from '../tags/Tags.jsx'
import { useEffect, useState } from 'react'
import Button from '../Button/Button.jsx'

const initialFormData = {
  title: '',
  image: '',
  content: '',
  tags: '',
  category: '',
  published: true
}

export default function Main() {

  const [posts,setPosts] = useState(initialPosts)
  const [publishedPosts, setPublishedPosts ] = useState([])
  const [tags,setTags] = useState([])
  const [formData,setFormData] = useState(initialFormData)

  useEffect(() => {

    setPublishedPosts(posts.filter((post) => post.published === true ))

    const tagsItems = []
    posts.forEach(post => {
      const postTags = post.tags
      console.log(postTags)

      postTags.forEach((tag) => {
        if(!tagsItems.includes(tag)) {
          tagsItems.push(tag)
        }
        // !tags.includes(tag) && tags.push(tag)
      })
    })
    setTags(tagsItems)

  },[posts])

  useEffect(() => {
    console.log(`Stai creando un post ${formData.published ? 'pubblico' : 'non pubblico'}`)
  },[formData.published])

  // const [title,setTitle] = useState('')

  function addPost(e) {
    e.preventDefault()

    // const newTitle = title.trim()
    // if(newTitle === '') return

    const post = {
      id: Date.now(),
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim())
    }

    setPosts([...posts,post])
    setFormData(initialFormData)

  }

  function deletePost(id) {

    setPublishedPosts(publishedPosts.filter(post => post.id !== id ))

  }

  function handleFormData(e) {

    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

  }

  // console.log('tags',tags)

  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <form onSubmit={addPost} action="" className='form'>
            <div>
              <label htmlFor="title">Titolo</label>
              <input onChange={handleFormData} id='title' name='title' value={formData.title} type="text" placeholder='Titolo del post' />
            </div>
            <div>
              <label htmlFor="image">Immagine (src)</label>
              <input onChange={handleFormData} type='text' name="image" id="image" value={formData.image} placeholder='Immagine del post'/>
            </div>
            <div>
              <label htmlFor="category">Categoria</label>
              <select value={formData.category} onChange={handleFormData} name="category" id="category">
                <option value="">Seleziona categoria</option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="express">Express</option>
                <option value="react">React</option>
              </select>
            </div>
            <div>
              <label htmlFor="content">Contenuto</label>
              <textarea onChange={handleFormData} value={formData.value} name="content" id="content" placeholder='Contenuto del post'></textarea>
            </div>
            <div>
              <label htmlFor="tags">Tags</label>
              <input onChange={handleFormData} id='tags' type="text" value={formData.tags} name='tags' placeholder='Tag del post' />
            </div>
            <div>
              <input onChange={handleFormData} type="checkbox" checked={formData.published} id='published' name='published' />
              <label htmlFor="published">Pubblicato</label>
            </div>
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