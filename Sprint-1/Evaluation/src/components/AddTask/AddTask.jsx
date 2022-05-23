import React from "react";
import styles from "./addTask.module.css";

import { useState } from 'react'
import Tasks from "../Tasks/Tasks";
import { TaskHeader } from "../TaskHeader";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
    const[head,setHead]=useState(0)
  const [task,SetDatas]=useState("");
  const[array,setArray]=useState([]);

  const invalue =(e)=>{
      SetDatas(e.target.value);
      
  }
  const store =()=>{
setArray([task,...array])

   console.log(array);
   
   setHead(head+1);
  
  }

  return (
   <>
   <TaskHeader v={head}/>
    
     <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={invalue} />
      <button data-cy="add-task-button" onClick={store}>+</button>
      </div>
  
    <Tasks pass={array}/>
    
   </>
  );
};

export default AddTask;