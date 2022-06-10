import { addcount } from '../Redux/Counter/action';
import {useDispatch, useSelector} from "react-redux"

export const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((store)=>store.counter.counter)
    return (
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={()=>{dispatch(addcount(1))}}>Add1</button>
        </div>
    )
}