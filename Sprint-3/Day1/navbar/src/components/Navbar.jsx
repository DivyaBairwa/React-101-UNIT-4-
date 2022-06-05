import React from "react";

const Navbar = () => {
  return (
      <div className="cont">
    <div className="container">
      <div className="innerdiv first">
        <h3>Logo</h3>
      </div>
      <div className="innerdiv second">
        <p>Inspiration</p>
        <p>Find Work</p>
        <p>Learn Design</p>
        <p>Hire Designers</p>
      </div>
      <div className="innerdiv third">
        <button className="btn">Sign In </button>
        <button className="btn">Sign Up </button>
      </div>
    </div>
    </div>
  );
};
export default Navbar;