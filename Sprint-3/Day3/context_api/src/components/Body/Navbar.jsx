import { CartContext } from "../../Contexts/CartContext"
import { useContext } from "react"

export const Navbar = ()=>{
    const {cart} = useContext(CartContext)
    return(
    <nav style={{display:"flex",
    justifyContent:"end",
    padding:"15px",
    margin:"10px",
    fontSize: "28px",
  
}}
    >Cart : {cart} </nav>
)
}