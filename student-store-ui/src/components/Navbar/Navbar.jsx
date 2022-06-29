import * as React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Link to="/">Home</Link>
      <Link to="/product/101">Product example</Link>
    </nav>

  );
}
