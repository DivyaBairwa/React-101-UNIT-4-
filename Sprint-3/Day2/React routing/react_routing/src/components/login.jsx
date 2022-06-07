import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const Login = ()=>{
    const {handleAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    return (
        <div>
            <input type="text" placeholder="UserName" />
            <input type="text" placeholder="Password" />
            <button
            onClick={()=>{handleAuth(true); navigate(-2,{replace:true})}}
            >Submit</button>  
        </div>
    )   
} 