import { useState } from 'react'
import './task.css'
const Task = () => {

    const [input,setInput]=useState('');
    const [list,setList]=useState([]);

    const handle=()=>{
        if(input.trim() !== '') {
            setList([...list,input]);
            setInput('');
        }
    }

    const handleDelete=(indexToDelete)=>{
        setList(list.filter((_, index) => index !== indexToDelete));
    }

  return (
    <div className='container'>
      <h1>Task Component</h1>
      <div>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter your task here..'/>
        <button className='add' onClick={handle}>+Add</button>
      </div>

      <div className="lists">
        {list.map((task,index)=>{
            return (
                <div key={index} className="task-item">
                    <p>{task}</p>
                    <button className="delete-btn" onClick={()=>handleDelete(index)}>Delete</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Task
