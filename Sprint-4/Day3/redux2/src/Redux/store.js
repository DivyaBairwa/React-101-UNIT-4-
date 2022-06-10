import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { countReducer } from './Counter/reducer'
import {TodoReducer} from './Todos/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter : countReducer,
    todos : TodoReducer
})

// const middleware1 = (store)=>(next)=>(action)=>{
//     if(typeof action == 'function')
//     {
//         return action(store.dispatch)
//     }

//     next(action)
// }

// const middleware2 = (store)=>(next)=>(action)=>{
//     console.log("Entering MW2");
//     next(action)
//     console.log("Exit MW2")
// }

export const store = createStore(rootReducer,
    applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// store.subscribe(()=>{
//     console.log("sub:", store.getState())
// })