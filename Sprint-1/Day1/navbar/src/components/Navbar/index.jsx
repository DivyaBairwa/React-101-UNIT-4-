import react from "react"
const Navbar=()=>{
    return(
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
              <NavLink to="/services" activeStyle>Services
              </NavLink>
              <NavLink to="/Projects" activeStyle>Projects
              </NavLink>
              <NavLink to="/about" activeStyle>About
              </NavLink>

            </NavMenu>
        </Nav>
        </>
    );
}
export default Navbar