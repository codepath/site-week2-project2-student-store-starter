import * as React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <h2 className="title">The Student Store</h2>
    </nav>
  );
}
