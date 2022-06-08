import { AuthContext } from "../contexts/aut_context"
import { useContext } from "react"

export const Navbar = ()=>{
    const {isAuth,handleChange} = useContext(AuthContext)
    return(
    <nav style={{
    background:"#001e28",
    padding:"15px",
    margin:"10px",
    fontSize: "28px",
    border:"1px solid red"
}}
    > 
    <button style={{width:"100px", height:"50px", margin:"10px"}} onClick={handleChange}>{isAuth}</button>
    {/* <button style={{width:"100px", margin:"10px"}}>Logout</button> */}
    </nav>
)
}