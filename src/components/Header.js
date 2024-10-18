import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Find Your Doctor</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
