import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Logo />
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us">
                            About us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">
                            Contact us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#buy-now">
                            Buy now
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export function Logo() {
    return (
        <a className="navbar-brand logo" href="/">
                <i className="bi-cart4"> </i>
                Student store
        </a>
    )
}