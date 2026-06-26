import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signOutUser } from "../googleauth";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">WebCafe</div>

      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar__auth">
        {user ? (
          <>
            <span className="navbar__user">
              {user.displayName || user.email}
            </span>
            <button
              type="button"
              className="navbar__button navbar__button--outline"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/sign-in" className="navbar__button navbar__button--outline">
              Sign In
            </Link>
            <Link to="/register" className="navbar__button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;