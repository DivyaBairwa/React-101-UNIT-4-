import { Add_Todo, Delete_Todo, FILTER, SORT, Toogle_Todo } from "./action";

const init = {todos:[]}
export const TodoReducer = (store=init,action)=>{
    switch(action.type){
        case Add_Todo:
            return{...store, todos: action.payload}
        case SORT:
            return {...store, todos: [...store.todos].sort((a,b)=>a[action.payload]>b[action.payload]?1:a[action.payload]<b[action.payload]?-1:0)};
        case FILTER:
            return {...store, todos:store.todos.filter((e)=> e.title.includes(action.payload))}
        case Delete_Todo:
            return {...store, todos:store.todos.filter((el)=>el.id !==action.payload)}
        case Toogle_Todo:
            return {...store, todos: store.todos.map((todo)=> todo.id === action.payload ? {...todo, status:!todo.status}:todo)}
        default:
            return store;
    }
}