import { createContext, useState } from "react";
const axios = require('axios');

export const AuthContext  = createContext();

export const AuthContextProvider = ({children})=>{
    const [isAuth,setAuth] = useState("login")
    const [token,setToken] = useState("")

    const handleChange = ()=>{
        if(isAuth==="login")
        {
            setAuth("logout")
            axios.post('https://reqres.in/api/login', {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
              })
              .then(function (response) {
                console.log(response);
                setToken(response.data.token)
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else{
            setAuth("login")
            setToken("")
        }
    }
    return(
        <AuthContext.Provider value={{isAuth,handleChange,token}}>{children}</AuthContext.Provider>
    )
}