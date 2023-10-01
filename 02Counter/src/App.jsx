import { useState } from 'react'
import './App.css'

function App() {
  let [count, setcount] = useState(0)
  const value = () =>{
      setcount(count+1)
  }
    const removal = () =>{
        setcount(count-1)
    }

  return (
    <>
        <h1>Counter Project</h1>
        <button
         onClick={value}
        >Add Count {count}</button>
        <br/>
        <button onClick={removal}
        >Remove Count{count}</button>
    </>
  )
}

export default App
