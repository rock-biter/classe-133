import { useState } from 'react'

export default function Counter() {

  console.log('render')

  const [count, setCount] = useState(0)

  // console.log('state:',state)

  // let count = state[0]
  // let setCount = state[1]

  return (
    <div>
      <div className='buttons'>
        <button onClick={() => setCount( count > 0 ? count - 1 : 0)}>- 1</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
      </div>
      
    </div>
  )
}