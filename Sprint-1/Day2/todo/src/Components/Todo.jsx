import React,{ useState} from 'react'
import {nanoid} from 'nanoid'
import TodoItem from './TodoItem'

const Todo=()=>{
    const[task,setTask]=useState("")
    const[todo,setTodo]=useState([])

    const handleChange=(e)=>{
       
        setTask(e.target.value)

    }

    const handleClick=()=>{
        let taskObj={
            id:nanoid(),
            title:task,
            status:false,
        }
        setTodo([...todo,taskObj]);
    }

    return(
        <div>
        
        {todo.map((ele)=>{
            return (
       <TodoItem key={ele.id} ele={ele}/> 
            
            )
        })}

<input  style={{width:"50%",
                height:"50px",
                borderRadius:"13px",
                marginRight:"8px",
                fontSize:"25px"}}
                type={"text"} 
                placeholder="Write Something" 
                value={task} 
                onChange={handleChange} />

<button style={{width:"15%",
               height:"50px",
               borderRadius:"13px",
               fontSize:"35px",
               marginTop:"10px"}}  
               onClick={handleClick}>+</button>
</div>
    )
}
export default Todo