import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export const UsersList = ()=>{
    const [users,setUsers] = useState([])
    useEffect(()=>{

        axios.get('https://reqres.in/api/users')
  .then(function (response) {
    // handle success
    setUsers(response.data.data)
    console.log(response);
  })
    },[])

    return(
        <div>
            {users.map((e)=>(
                <p key={e.id}>
                <Link to={`/users/${e.id}`}>
                {e.id}.{e.first_name}
                </Link>
                </p>
            ))}
        </div>
    )
}