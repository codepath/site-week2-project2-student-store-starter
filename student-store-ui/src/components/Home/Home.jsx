import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchNavbar from "../SearchNavbar/SerachNavbar"
import { useState} from "react"

export default function Home(props) {
  const [isCategory, setCategory]=useState('all');
  const [search, setSearch]=useState('');

  return (
    <div className="home" id="header">
      <Hero/>
      <SearchNavbar 
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <ProductGrid 
      isCategory={isCategory}
      products={props.products} 
      search={search} 
      handleAddItemToCart={props.handleAddItemToCart}
      />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export function About(){
  return(
    <div className="about" id="about">
      <div className="content">
        <h2>About</h2>
        <div className="summary">
          <div className="text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Contact(){
  return(
    <div className="content" id="content">
      <div className="content">
        <h2>Contact Us</h2>
        <div className="summary">
          <ul className="info">
            <li>
                <span className="label">Email:</span>
                <span>code@path.org</span>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Footer(){
  return(
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="links">
            <div className="link-column">
              <h4>Categories</h4>
              <ul>
                <li className="footer-li">All Categories</li>
                <li className="footer-li">Clothing</li>
                <li className="footer-li">Food</li>
                <li className="footer-li">Accessories</li>
                <li className="footer-li">Tech</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li className="footer-li">About Us</li>
                <li className="footer-li">Find a Store</li>
                <li className="footer-li">Terms</li>
                <li className="footer-li">Sitemap</li>
                <li className="footer-li">Careers</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <ul>
                <li className="footer-li">Contact Us</li>
                <li className="footer-li">Money Refund</li>
                <li className="footer-li">Order Status</li>
                <li className="footer-li">Shipping Info</li>
                <li className="footer-li">Open Dispute</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Account</h4>
              <ul>
                <li className="footer-li">Login</li>
                <li className="footer-li">Register</li>
                <li className="footer-li">Account Setting</li>
                <li className="footer-li">My Orders</li>
                <li className="footer-li">Privacy</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Socials</h4>
              <ul>
                <li className="footer-li">Facebook</li>
                <li className="footer-li">Twitter</li>
                <li className="footer-li">LinkedIn</li>
                <li className="footer-li">Instagram</li>
                <li className="footer-li">Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}