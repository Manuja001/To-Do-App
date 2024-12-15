import React, { useRef, useState } from 'react'
import todo from '../assets/Todo.png'
import TodoItems from './TodoItems'

function Todo() {
  const [Todo , setTodo] = useState([])
  const inputRef = useRef()

  const add = () =>{
    const inputText = inputRef.current.value.trim();
    console.log(inputText)

    if(inputText === ""){
      return null
    }

    const newTodo ={
      id: Date.now(),
      text : inputText,
      isComplete: false
        }
      setTodo((prev) => [...prev , newTodo])
      inputRef.current.value = ""
  }


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 h-96 rounded-lg shadow-lg'>
        
        {/* -------------Title-------------- */}

        <div className='flex justify items-center'>
        <img src={todo} alt='todo' />
            <h1 className='text-3xl px-5 font-semibold text-slate-600'>To-Do List</h1>
            
        </div>
        
        {/* -------------Input-------------- */}

        <div className='flex place-content-between'>
            <input ref={inputRef} type='text' className='ml-5 mt-5 p-2 border border-slate-300 rounded-lg' placeholder='Add a task' />
         <button onClick={add} className='cursor-pointer mt-5 p-2 bg-slate-900 text-white rounded-lg'>Add +</button>
        </div>

        {/* -------------List-------------- */}
        <div>
        {Todo.map ((item,index) =>{
          return <TodoItems key={index} task={item.text}/>
        })}

        


        </div>
    </div>
  )
}

export default Todo