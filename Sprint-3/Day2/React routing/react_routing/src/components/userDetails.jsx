import axios from "axios";
import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom"
export const UserDetails = ()=>{
    const [user,setUser] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).
        then((response)=>{
            console.log(response.data.data)
            setUser(response.data.data)
        })
    },[])
    return(
        <div>
            <img src={user.avatar} alt="" />
            <div>First Name: {user.first_name}</div>
            <div>Last Name: {user.last_name}</div>
        </div>
    )
}