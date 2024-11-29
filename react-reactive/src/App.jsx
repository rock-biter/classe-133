import './App.css'
import AccordionList from './components/Accordion/AccordionList'
// import Counter from './components/Counter'

const faqs = [
  {
	  id: 1, //👈
    title: "come posso scricare il tuo ebook?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
  },
  {
	  id:2, // 👈
    title: "Posso avere un rimborso per il corso acquistato?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
  },
  {
	  id:3, // 👈
    title: "Come posso imparare?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
  },
  {
	  id:4, // 👈
    title: "Posso regale il corso ad un amico?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
  },
]

function App() {

  return (
    <>
      {/* <Counter /> */}
      <AccordionList items={faqs} />
    </>
  )
}

export default App
