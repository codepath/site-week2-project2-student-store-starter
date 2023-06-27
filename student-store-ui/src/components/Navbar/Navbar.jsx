import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo></Logo>
      <div className="menu">
        <Link className="link-text" to="/./#home">
          <button className="nav-button">Home</button>
        </Link>
        <Link className="link-text" to="/./#about">
          <button className="nav-button">About Us</button>
        </Link>
        <Link className="link-text" to="/./#contact">
          <button className="nav-button">Contact Us</button>
        </Link>
        <Link className="link-text" to="/./#footer">
          <button className="nav-button">Resources</button>
        </Link>
        <Link className="link-text" to="/history">
          <button className="nav-button">History</button>
        </Link>
      </div>
    </nav>
  );
}
