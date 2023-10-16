import { useState } from 'react'
import './App.css'
import Addtodo from "./components/Addtodo.jsx";
import Listtodo from "./components/Listtodo.jsx";

function App() {

  return (
    <>
      <h1>Redux Toolkit</h1>
        <Addtodo/>
        <Listtodo/>
    </>
  )
}

export default App
