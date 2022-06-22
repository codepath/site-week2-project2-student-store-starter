import * as React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerColumn">
                <h5>Categories</h5>
                <ul>
                    <li>All Categories</li>
                    <li>Clothing</li>
                    <li>Food</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                </ul>
            </div>
        </div>
    );
}