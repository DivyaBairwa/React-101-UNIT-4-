import React from 'react';
import TodoItem from './TodoItem'
import TodoList from './TodoList'

function Todo(){
    const [input, setInput] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () =>{
        // const obj={
        //     title: input
        // }
        setTodo([...todo,input]);
    }
    return(
        <>
            <input  
                style={{width:"50%",
                height:"50px",
                borderRadius:"13px",
                marginRight:"8px",
                fontSize:"25px"}}
                type="text" placeholder="Write Something..." onChange={handleChange} value={input}/>
            <button 
               style={{width:"15%",
               height:"50px",
               borderRadius:"13px",
               fontSize:"35px",
               marginTop:"10px"}}  
               onClick={addTodo}>+</button>
            <div>
               <TodoList todo={todo}/>
            </div>
        </>
    )
}

export default Todo;