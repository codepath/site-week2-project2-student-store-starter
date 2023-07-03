import "./Navbar.css"

import Logo from "../Logo/logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <Logo />
      </a>
      <section className="navbar-items">
        <a href="/">
          <div>
            <b>Home</b>
          </div>
        </a>
        <a href="/#about">
          <div>
            <b>About Us</b>
          </div>
        </a>
        <a href="/#contact">
          <div>
            <b>Contact Us</b>
          </div>
        </a>
        <a href="/#product-grid">
          <div>
            <b>Buy Now</b>
          </div>
        </a>
      </section>
    </nav>
  )
}
