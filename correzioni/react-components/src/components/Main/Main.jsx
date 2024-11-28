import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'

export default function Main() {
  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <h1 className={style.section_title}>Il mio blog</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <PostCard />
            </div>
            <div className="col-4">
              <PostCard />
            </div>
            <div className="col-4">
              <PostCard />
            </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}