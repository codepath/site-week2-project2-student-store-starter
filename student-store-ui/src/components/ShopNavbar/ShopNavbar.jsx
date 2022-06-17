import * as React from "react"
import "./ShopNavbar.css"

export default function ShopNavbar() {
return (
    <nav className="shop-navbar">
        <div className="content">
            <div className="row search-bar-wrapper">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search for item"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="help-cart">
                    <div className="help">
                        <i className="fa-solid fa-circle-question"></i>
                        <span>Help</span>
                    </div>
                    <div className="my-cart">
                        My Cart <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <div className="row menu-wrapper">
                <div className="subnav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="menu">
                    <li className="active">All Categories</li>
                    <li>Clothing</li>
                    <li>Food</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                </ul>
            </div>
        </div>
    </nav>
)
}
