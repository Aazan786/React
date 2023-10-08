import { useState } from 'react'
import './App.css'
import Card from "./components/Card.jsx";
function App() {

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
        <Card username='Azan' btntext='click me'/>
        <Card username='Aleeza' btntext='visit me'/>
    </>
  )
}

export default App
