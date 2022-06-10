import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deletetodo, filter, getTodos, sort, toogletodo } from "../Redux/Todos/action";
// import axios from "axios";

export const Todo = ()=>{

    const todos = useSelector((store)=>store.todos.todos);
    const dispatch = useDispatch();

    const [text,setText] = useState("");
    const [filter, setFilter] = useState("")

    const handleadd = ()=>{
        const payload = {
            title : text,
            status : false
        }

        fetch(" http://localhost:8080/todos",{
            method:"Post",
            headers:{
                "content-type":"Application/json",
            },
            body:JSON.stringify(payload)
        }).then(()=>{
            dispatch(getTodos())
        }).then(()=>setText(""))
    }

    useEffect(()=>{
    dispatch(getTodos())
    },[])

    // const getData = ()=>{
    //     axios.get('http://localhost:8080/todos')
    // .then(function (response) {
    //   // handle success
    //    //   console.log(response.data);

    //   dispatch(addTodo(response.data))
    //  })
    // }

    return(
        <div>
            <input type="text" placeholder="Filter" onChange={(e)=>{
                // dispatch(filter(e.target.value))
                setFilter(e.target.value)
            }} />
            <select  id=""
            onChange={(e)=>{
                dispatch(sort(e.target.value))
            }}
            >
                <option value="id">Sort By ID</option>
                <option value="status">Sort By Status</option>
                <option value="title">Sort By Title</option>
            </select>
            <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={handleadd}>Add Todo</button>

            {todos.filter(todo=>todo.title.includes(filter)).map((e)=>(
                <div>{e.id}-{e.title}-{e.status?"Done":"Not Done"}
                <button onClick={()=>{
                    dispatch(deletetodo(e.id))
                }}>Delete</button>
                <button onClick={()=>{
                    dispatch(toogletodo(e.id))
                }}>Toogle</button>
                </div>
            ))}
        </div>
    )
}