import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Logo from "../Logo/logo"

export default function Home({category, products}) {
  return (
    <div className="home">
      <section className="buy">
        <h3>Best Selling Products</h3>
          <ProductGrid 
            products={products}
            category={category}
          />
      </section>
      <section className="about">
        <h3>About</h3>
        <div className="about-box">
          <section className="about-text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </section>
          <section className="about-logo">
            <Logo />
          </section>
        </div>
      </section>
      <section className="contact">
        <h3>Contact</h3>
        <div className="contact-box">
          contact info
        </div>
      </section>
    </div>
  )
}
