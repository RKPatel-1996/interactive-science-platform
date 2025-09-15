// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>BioMicro.Interact</h4>
          <p>Interactive lessons in biotechnology and microbiology.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>
              <Link to="/support">Support the Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>{" "}
            {/* Placeholder */}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {currentYear} BioMicro.Interact. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
