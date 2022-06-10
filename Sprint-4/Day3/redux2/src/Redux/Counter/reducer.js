import { Add_count } from "./action";

const init = {counter:0}
export const countReducer = (store=init,action)=>{
    switch(action.type){
        case Add_count:
            return{...store,counter:store.counter+action.payload}
        default:
            return store;
    }
}