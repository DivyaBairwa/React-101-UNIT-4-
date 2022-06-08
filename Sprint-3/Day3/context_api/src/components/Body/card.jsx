import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
export const Card = ()=>{
    const {handleChange} = useContext(CartContext)
    return (
        <div style=
        {{width:"200px", height:"200px", padding:"10px", background:"yellow", margin:"auto"}}>
            <button onClick={()=>{handleChange(1)}}>Add to Cart</button>
        </div>
    ) 
}