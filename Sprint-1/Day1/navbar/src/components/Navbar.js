import React from "react";
import contact from "./contact";
import link from "./link";
import icon from "./icon";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "90%",
        margin: "auto",
      }}
    >
      <icon />
      <link />
      <contact />
    </div>
  );
};
export default Navbar;
