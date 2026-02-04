import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h1 className="navTitle">Portfolio Webside</h1>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/hobby">Hobby</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
