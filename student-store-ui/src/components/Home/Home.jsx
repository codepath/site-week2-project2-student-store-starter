import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Search from "../Search/Search";

export default function Home({products, searchValue, onSearchChange, onFilterClick, filter}) {
  return (
    <div className="home">
      <Hero></Hero>
      <Search onFilterClick={onFilterClick} filter={filter} searchValue={searchValue} onSearchChange={onSearchChange}/>
      <h2>Our Products</h2>
      <ProductGrid products={products}></ProductGrid>
      <section id="About">
        <h2>About</h2>
        <div className="about">
          <div className="about-content">
            <p>The Student Store is your one stop shop for all your student needs. Our mission is to supply students everywhere with the tools they need to be successful. Our team works day and night to provide you with top tier products.</p>
          </div>
          <div className="about-media">
              <img src="src/images/logo.png" alt="" />
            </div>
        </div>
      </section>
      <section id="Contact">
      <h2>Contact Us</h2>
        <div className="contact">
          <ul className="contact-list">
            <li>
              <div className="label"><span>Email:  </span></div>
              <span>studentstore@codepath.org</span>
            </li>
            <li>
            <div className="label"><span>Phone: </span></div>
              <span>1-800-SUSTORE</span>
            </li>
            <li>
            <div className="label"><span>Address: </span></div>
              <span>123 Sesame Street, New York, NY</span>
            </li>
          </ul>
          <img className="contact-paper" src="src/images/paper.png" alt="Student Store Logo with two S's and blue and pink gradient" />
        </div>
      </section>
      <footer className="footer-clean">
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">All Categories</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Tech</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Money Refund</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Open Dispute</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Account</h3>
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Account Settings</a></li>
                            <li><a href="#">My Orders</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">Student Store © 2022</p>
                    </div>
                </div>
        </div>
      </footer>
    </div>
  )
}
