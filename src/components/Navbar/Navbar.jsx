import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h1 className="navTitle">Portfolio Webside</h1>
      <NavLink className="navLink" to="/" end>
        Home
      </NavLink>
      <NavLink className="navLink" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="navLink" to="/hobby">
        Hobby
      </NavLink>
      <NavLink className="navLink" to="/about">
        About
      </NavLink>
      <NavLink className="navLink" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
