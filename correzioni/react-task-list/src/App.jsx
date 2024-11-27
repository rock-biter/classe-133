import tasks from './tasks.js'

export default function App() {

  console.log(tasks)
  // array con in_progress e backlog
  const todoTasks = tasks.filter((task) => task.state === 'backlog' || task.state === 'in_progress').sort((taskA,taskB) => taskA.priority - taskB.priority)


  // array con completed
  const completedTasks = tasks.filter((task) => task.state === 'completed' ).sort((taskA,taskB) => taskA.priority - taskB.priority)

  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1>
            Task Manager
          </h1>
        </div>
      </header>
      <main>
        <section className="tasks-section">
          <div className="container">
            <h2 className='task-title'>Current Task ({todoTasks.length})</h2>
          </div>
          <div className="container">
            <ul className="task-list">
              {todoTasks.map((task) => {

                const { id, title, state, priority, estimatedTime} = task

                let stateMessage = state === 'backlog' ? state : 'in progress'

                // switch(state) {
                //   case 'backlog': 
                //     stateMessage = state
                //     // esegui questo codice
                //     break;
                //   case 'in_progress':
                //     // esegui questo codice
                //     stateMessage = 'in progress'
                //     break;
                //   case 'completed':
                //     // esegui questo codice
                //     stateMessage = state
                //     break;
                // }

                // let stateMessage = ''

                // if(state === 'backlog') {
                //   stateMessage = 'backlog'
                // } else {
                //   stateMessage = 'in progress'
                // }

                return <li key={id} className="task-item">
                  <div className="task-item__head">
                    <span className="task-title">{title}</span>
                    <span className="task-state">{stateMessage}</span>
                  </div>
                  <div>
                    Priority: {priority}
                  </div>
                  <div>
                    estimated time: {estimatedTime} min
                  </div>
                </li>

              })}
            </ul>
          </div>
        </section>
        <section className="tasks-section">
          <div className="container">
            <h2 className='task-title'>Completed Task ({completedTasks.length})</h2>
          </div>
          <div className="container">
            <ul className="task-list">
              {completedTasks.map((task) => {

                const { id, title, state, priority, estimatedTime} = task

                return <li key={id} className="task-item">
                  <div className="task-item__head">
                    <span className="task-title">{title}</span>
                    <span className="task-state">{state}</span>
                  </div>
                  <div>
                    Priority: {priority}
                  </div>
                  <div>
                    estimated time: {estimatedTime} min
                  </div>
                </li>

              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}


