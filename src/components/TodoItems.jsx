import React from 'react'
import done from '../assets/done.png'
import del from '../assets/delete.png'

function TodoItems({task}) {
  return (
    <div className='flex items-center my-5 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={done} alt='tick' />
            <p className='ml-5 text-slate-800 font-medium'>{task}</p>
            
        </div>
        <img src={del} alt='delete' className='cursor-pointer'/>
    </div>
  )
}

export default TodoItems