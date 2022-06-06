import { AuthContext } from "../context/AuthContext";

import React, { useState, useContext } from "react";

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[clogin,setlogin]=useState({})

  const nav=useNavigate()
 
  const {Login}=useContext(AuthContext)

  const handleChange=(el)=>{
      
         const{name,value}=el.target;
         setlogin({
             ...clogin,
             [name]:value,
         })
  }
  const handleSubmit=(el)=>{
      el.preventDefault();
      Login()
      nav("/Product")
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input  data-cy="login-email" type="Enter Email" name="email" placeholder="email" onChange={handleChange}/><br></br>
  
      <input data-cy="login-password" type="Enter Password..." name="password" placeholder="enter password" onChange={handleChange} /><br></br>
      <button data-cy="login-submit">Login</button>
      </form>

    </div>
  );
};

export default Login;
