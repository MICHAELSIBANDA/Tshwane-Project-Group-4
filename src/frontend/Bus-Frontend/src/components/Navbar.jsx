import "../styles/Global.css";
import "../styles/Navbar.css";
import { FaBus } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <FaBus className="logo-icon" />
        <div>
          <h2>BusLink</h2>
          <span>Moving South Africa</span>
        </div>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#services">Routes</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button className="login-btn">
        Sign In
      </button>

    </header>
  );
}

export default Navbar;