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
            src="https://files.oaiusercontent.com/file-x1UCmrPu57tW22Ede8hYojcg?se=2024-10-18T13%3A33%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8be0a495-1e1b-4f63-86fe-4672a4be5e01.webp&sig=LiXq7KnL%2BkiI3FI/cVTMUQLkbeoX3cwgtipPE98/zkQ%3D"
            alt=" "
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
