import React from 'react'
import tick from '../assets/tick.png'
import noTick from '../assets/not-tick.png'
import del from '../assets/delete.png'

function TodoItems({task , id , isComplete , deleteTodo , toggle}) {
  return (
    <div onClick={()=> toggle(id)} className='flex items-center my-5 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick :noTick} alt='tick' />
            <p className={`ml-5 text-slate-800 font-medium ${isComplete ?"line-through" : "" }`}>{task}</p>
            
        </div>
        <img onClick={() => deleteTodo(id)} src={del} alt='delete' className='cursor-pointer'/>
    </div>
  )
}

export default TodoItems