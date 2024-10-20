import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Phone, Info, Calendar, Search } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img
            src="https://res.cloudinary.com/dkidc6jca/image/upload/v1729407460/jibftdebfzbgiqyxql4b.webp"
            alt="Docconnect "
          />
          <span>DocConnect</span>
        </Link>
        <nav>
          <Link to="/" className="nav-item">
            <Home size={20} />
            Home
          </Link>
          <Link to="/doctors" className="nav-item">
            <Search size={20} />
            Find Doctors
          </Link>
          <Link to="/appointments" className="nav-item">
            <Calendar size={20} />
            My Appointments
          </Link>
          <Link to="/about" className="nav-item">
            <Info size={20} />
            About Us
          </Link>
          <Link to="/contact" className="nav-item">
            <Phone size={20} />
            Contact
          </Link>
          <Link to="/login" className="nav-item login-btn">
            <User size={20} />
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
