import * as React from "react"
import "./Footer.css"

export default function Footer() {

    console.log('hi')

  return (
        <footer className="footer">
            <div className="content">
                <div className="links">
                    <div className="link-column">
                        <h4>Categories</h4>
                        <ul>
                            <li>All Categories</li>
                            <li>Clothing</li>
                            <li>Food</li>
                            <li>Accessories</li>
                            <li>Tech</li>
                        </ul>
                    </div>
                <div className="link-column">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Find a Store</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                        <li>Careers</li>
                    </ul>
                </div>        
                </div>
            </div>
        </footer>
  )
}
