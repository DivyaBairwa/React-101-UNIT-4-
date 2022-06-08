import React,{useContext} from "react";
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {Count}=useContext(CartContext)

  const {isAuth,logout}=useContext(AuthContext)

  const nav = useNavigate()

  const handlelogin=()=>{
      if(isAuth){
          logout()
          nav("/")
      }
      else{
          nav("/Login")
      }
    }
  return (
    <div
    data-cy="navbar" style={{gap:"20%",
    marginTop:"20px",
    display:"flex",
    paddding:"10px" ,
    height:"50px",
   }}>
      <Link data-cy="navbar-home-link" to="">Logo</Link>

      <Link data-cy="navbar-home-link" to="/Product">Product</Link>

      <span data-cy="navbar-cart-items-count">Cart:{Count}</span>

      <button data-cy="navbar-login-logout-button" onClick={handlelogin}>{isAuth?"logout":"login"}</button>
    </div>
  );
};

export default Navbar;
