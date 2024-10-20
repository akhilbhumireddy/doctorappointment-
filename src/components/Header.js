import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  Phone,
  Info,
  Calendar,
  Search,
  Menu,
  X,
} from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img
            src="https://res.cloudinary.com/dkidc6jca/image/upload/v1729407460/jibftdebfzbgiqyxql4b.webp"
            alt="DocConnect"
          />
          <span>DocConnect</span>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item" onClick={toggleMenu}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/doctors" className="nav-item" onClick={toggleMenu}>
            <Search size={20} />
            <span>Find Doctors</span>
          </Link>
          <Link to="/appointments" className="nav-item" onClick={toggleMenu}>
            <Calendar size={20} />
            <span>My Appointments</span>
          </Link>
          <Link to="/about" className="nav-item" onClick={toggleMenu}>
            <Info size={20} />
            <span>About Us</span>
          </Link>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>
            <Phone size={20} />
            <span>Contact</span>
          </Link>
          <Link to="/login" className="nav-item login-btn" onClick={toggleMenu}>
            <User size={20} />
            <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
