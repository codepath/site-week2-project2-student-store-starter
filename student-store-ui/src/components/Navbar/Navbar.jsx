import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo to="/">Hello</Logo>
      <Header />
    </nav>
  );
}
