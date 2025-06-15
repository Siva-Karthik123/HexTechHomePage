// components/Navbar.jsx
import '../styles/Navbar.css';
import ProductDropdown from "./ProductDropdown";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-section left">
        <li> <ProductDropdown/></li>
        <li><span>🧱</span> Use cases</li>
        <li><span>📍</span> Enterprise</li>
      </ul>

      <div className="logo">HEX</div>

      <ul className="navbar-section right">
        <li><span>⚠️</span> Resources</li>
        <li><span>🧊</span> Pricing</li>
        <li className="login">Log In</li>
        <li><button className="btn-started">Get started</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;

