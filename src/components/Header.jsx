import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🐘 <span>Saim Design</span>
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/products" className="nav-link" activeClassName="active">
          Products
        </NavLink>
        <NavLink to="/gift-cards" className="nav-link" activeClassName="active">
          Gift Cards
        </NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
        <input type="text" placeholder="Search" className="search-bar" />
      </nav>
    </header>
  );
}

export default Header;
