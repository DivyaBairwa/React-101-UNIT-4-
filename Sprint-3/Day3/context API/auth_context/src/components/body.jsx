import { AuthContext } from "../contexts/aut_context"
import { useContext } from "react"
export const Body = ()=>{
    const {token} = useContext(AuthContext)
    return(
        <div>
            <div>Status: {token===""?"false":"true"}</div>
            <div>Token: {token===""?"please Login":token}</div>
        </div>
    )
}