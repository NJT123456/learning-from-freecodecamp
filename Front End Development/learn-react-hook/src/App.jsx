import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complate: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complate: false,
  }
]

const reducer = (state, action) => {
  switch(action.type){
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id ===action.id){
          return {...todo, complate: !todo.complate}
        }else{
          return todo;
        }
      })
      default:
        return state
  }
}

function App() {
  
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo) =>{
    dispatch({ type: "COMPLETE", id: todo.id })
  }

  console.log(todos)

  return (
    <>
      <div className="App">
        {todos.map((todo) => (
          <div key={todo.id}>
            <input type="checkbox" checked={todo.complate} onChange={() => handleComplete(todo)} />
            {todo.title}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
