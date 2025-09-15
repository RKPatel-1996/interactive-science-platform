// src/components/Header.jsx
import { NavLink } from "react-router-dom";
import "./Header.css"; // Import the CSS file

function Header() {
  return (
    <header className="app-header">
      <NavLink to="/" className="site-title">
        BioMicro.Interact
      </NavLink>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/video">Video</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
