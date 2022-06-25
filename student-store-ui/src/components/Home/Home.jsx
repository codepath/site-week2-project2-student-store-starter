import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"

// Props = products, handleAddItemToCart, handleRemoveItemToCart, setSelectedProductId, selectedProductId

export default function Home(props) {
  return (
    <div className="home">
      <Hero>Hero</Hero>

      <SubNavbar 
      products={props.products} 
      setProducts={props.setProducts} 
      searchFormContent={props.searchFormContent} 
      setSearchFormContent={props.setSearchFormContent}
      selectedCategory={props.selectedCategory}
      setSelectedCategory={props.setSelectedCategory} 
      ></SubNavbar>

      <ProductGrid 
      products={props.products}
      setProducts={props.setProducts}
      handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      searchFormContent={props.searchFormContent}
      setSearchFormContent={props.setSearchFormContent}
      selectedCategory={props.selectedCategory}
      setSelectedCategory={props.setSelectedCategory}
      selectedProductId={props.selectedProductId}
      setSelectedProductId={props.setSelectedProductId}
      shoppingCart={props.shoppingCart}
      ></ProductGrid>


      <div className="about">
        <div className="content">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>Our awesome store only brings you the best of the best products out there!</p>
              <p>No matter who you are, we guarantee that there's something for everyone who visits our store!</p>
              <p>So what are you waiting for? Buy now!</p>
            </div>
            <div className="media">

            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <div className="summary">
            <ul className="info">
              <li>
                <span className="label">Email:</span>
                <span>code@path.org</span>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>1-800-PHONE</span>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>111 Wall Street, NYC</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <Footer />


    </div>

   

  )
}
