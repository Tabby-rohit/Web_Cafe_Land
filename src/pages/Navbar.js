import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">WebCafe</div>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/features">Features</Link>
        </li>

        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button className="navbar__button">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;