import Tab from './components/Tab'
import TabButton from './components/TabButton'
import languages from './languages'
import tabStyle from './components/Tabs.module.css'
import { useState } from 'react'

function App() {

  const [currentLangIndex,setCurrentLangIndex] = useState(-1)

  function setIndex(i) {
    if(i === currentLangIndex) {
      setCurrentLangIndex(-1)
      return
    }
    setCurrentLangIndex(i)
  }

  return (
    <>
      <main>
        <section className='languages'>
          <div className="container">
            <h1>Learn Web Development</h1>
          </div>
          <div className="container">
            <div className={tabStyle.tabs}>
              <div className={tabStyle.tabs_triggers}>
                {languages.map((lang,i) => (
                  <TabButton className={i === currentLangIndex ? tabStyle.active : ''} key={lang.id} item={lang} callback={() => setIndex(i)}></TabButton>
                ))}
              </div>
              { currentLangIndex !== -1 ?
                <Tab item={languages[currentLangIndex]} /> :
                <div>Nessu linguaggio selezionato</div>
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
