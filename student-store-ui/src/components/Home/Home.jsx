import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import codepathLogo from "/src/assets/codepath_logo.svg"
import "./Home.css"

export default function Home(props) {

  const [activeCategory, setActiveCategory] = React.useState(null)
  const [searchQuery, setSearchQuery] = React.useState("")

  return (
    <div className="home">
      
      <Hero />
      <div className="main-content">
        <div className="product-area" id="buy">
          <CategoryFilterBar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}/>
          <div className="right-col">
            <Searchbar 
              setSearchQuery={setSearchQuery}/>
            <ProductGrid
              products={props.products}
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              handleAddItemToCart={props.handleAddItemToCart}
              handleRemoveItemFromCart={props.handleRemoveItemFromCart}
              shoppingCart={props.shoppingCart} />
          </div>
        </div>
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  )
}

export function Searchbar( {setSearchQuery}) {
  return (
  <form className="search-bar">
    <input type="text" id="searchbox-input" placeholder="Search..."
      onChange={(evt) => setSearchQuery(evt.target.value.toLocaleLowerCase())}
      ></input>
  </form>

  )
}

export function CategoryFilterBar(props) {

  // maybe change so that it grabs all of the "category" attribute values from the available products
  let categories = ["clothing", "food", "accessories", "tech"]

  return (
    <div className="category-filter-bar">
      <h2>Shop</h2>
        <div className="filter-buttons">
          <h3>Filter by</h3>
          <CategoryFilter
            label={"All Categories"}
            onClick = {() => props.setActiveCategory(null)}
            isActive={!(props.activeCategory)} />

          {categories.map(category => (
            <CategoryFilter
              key={category}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              onClick = {() => props.setActiveCategory(category)}
              isActive={category == props.activeCategory}
            />
          ))}
        </div>
    </div>
    )
}

export function CategoryFilter(props) {
  let buttonClassName = props.isActive ? "category-filter is-active" : "category-filter"
  return (
    <button className={buttonClassName} onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export function AboutUs() {
  return (
    <div className="about" id="about">
      <h2 className="section-header">About</h2>
      <div className="about-body">
        <div className="about-text">
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <img className="about-img" src={codepathLogo} alt="CodePath Logo"></img>
      </div>
    </div>
  )
}


export function ContactUs() {
  return (
    <div className="contact-us" id="contact-us">
      <h2 className="section-header">Contact Us</h2>
      <div className="contact-us-body">
        <div className="contact-us-grid">
          <div className="contact-grid-item contact-method">Email</div>
          <div className="contact-grid-item contact-detail">code@path.org</div>
          <div className="contact-grid-item contact-method">Phone</div>
          <div className="contact-grid-item contact-detail">1-800-CODEPATH</div>
          <div className="contact-grid-item contact-method">Address</div>
          <div className="contact-grid-item contact-detail">123 Fake Street, San Francisco, CA</div>
          <div className="contact-grid-item contact-method">Socials</div>
          <div className="contact-grid-item contact-detail">
            <i className="fab fa-twitter social-link-ico"></i>
            <i className="fab fa-instagram social-link-ico"></i>
            <i className="fab fa-facebook social-link-ico"></i>
          </div>
        </div>
      </div>
    </div>  
  )
}