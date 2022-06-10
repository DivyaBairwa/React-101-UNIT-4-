// import axios from "axios";

export const Add_Todo = "ADD_TODO";
export const SORT = "SORT";
export const FILTER = "FILTER";
export const Delete_Todo = "Delete_Todo"
export const Toogle_Todo = "Toogle_Todo"

export const addTodo = (data)=>{
    return{
        type:Add_Todo,
        payload : data
    }
}

export const getTodos = ()=>async(dispatch)=>{
    const data = await fetch("http://localhost:8080/todos").then((x)=>x.json());

    dispatch(addTodo(data))
}

export const sort = (by)=>{
    return{
        type:SORT,
        payload:by

    }
}

export const filter = (text)=>{
    return{
        type:FILTER,
        payload:text
    }
}

export const deletetodo = (id)=>{
    return{
        type:Delete_Todo,
        payload:id
    }
}

export const toogletodo = (id)=>{
    return{
        type:Toogle_Todo,
        payload:id
    }
}