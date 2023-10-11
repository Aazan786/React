import {useEffect, useState} from 'react'
import './App.css'
import {TodoProvider} from "./contexts/index.js";
import {Todocontext} from "./contexts/index.js";
import TodoForm from "./components/TodoForm.jsx";
import Todoitem from "./components/Todoitem.jsx";

function App() {
    const [todos, settods] = useState([])

    const addtodo = (todo) =>{
        settods((prev) =>[{id: Date.now(), ...todo},...prev])
    }

    const updatetodo =(id, todo) => {
        settods((prev) => prev.map((prevtodo) =>(prevtodo.id === id ? todo : prevtodo)))
    }

    const deletetodo = (id) =>{
        settods((prev) => prev.filter((todo) => todo.id =! id))
    }

    const togglecomplete = (id) =>{
        settods((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    useEffect(() =>{
       const todos = JSON.parse( localStorage.getItem("todos"))
        if (todos && todos.length > 0){
            settods(todos)
        }
    },[])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return (
    <TodoProvider value={{todos, addtodo, updatetodo, deletetodo, togglecomplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */}
                  <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo) => (
                        <div key={todo.id}
                             className='w-full'
                        >
                            <Todoitem todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default App
