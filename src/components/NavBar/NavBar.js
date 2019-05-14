import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="logo__container">
          <i className="fas fa-igloo" />
          <span className="logo__name">Igloo</span>
        </Link>
        <ul className="navbar__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li>
            <Link to="/agent">Agent</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
