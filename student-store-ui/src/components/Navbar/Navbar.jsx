import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">
        <img
          src="codepath.f1b3e41a.svg"
          width={60}
          height={60}
          alt="Codepath Logo"
        />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li>
          <a href="/">Buy Now</a>
        </li>
      </ul>
    </nav>
  );
}
