import { useState, useEffect, useRef } from 'react'
import './task.css'
const Task = () => {

    const [input,setInput]=useState('');
    const isFirstRender = useRef(true);
    const [list,setList]=useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Save tasks to localStorage whenever list changes (but skip first render)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem('tasks', JSON.stringify(list));
    }, [list]);

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
