import * as React from "react"
import "./Home.css"
import About from "../About/About";
import Contact from "../Contact/Contact";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavbar from "../SubNavBar/SubNavBar";

export default function Home({ allProducts, category, setCategory, setSearchTerm, searchTerm, handleOnTextChange, handleOnToggle, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  console.log(allProducts);
  //filter products to display
  //remember if you put {} you need to return for the value!
  const filterProds = category !== "" ? allProducts.filter((prod) => {
    return prod.category === category
  }) : allProducts;

  //make sure when we filter based on the search term that the products shown are still filtered by the chosen category
  //not case sensitive so normalize both to lower case
  const searchProds = searchTerm !== "" ? filterProds.filter((prod) => {
    return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
  }) : filterProds;

  return (
    <div className="home">
      <div className="hero">
        <div className="content">
          <div className="intro">
            <h1>Welcome!</h1>
            <h1>Find Your Merch!</h1>
            <p>
              We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.
            </p>
          </div>
          <div className="media">
            <div className="headingImage">
              <img src="/images/home.svg" alt="homeImage"></img>
            </div>
          </div>
        </div>
      </div>
      <SubNavbar
        category={category}
        setCategory={setCategory}
        handleOnTextChange={handleOnTextChange}
        handleOnToggle={handleOnToggle}></SubNavbar>
      <About />
      <ProductGrid products={searchProds}
      allProducts={allProducts}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemFromCart={handleRemoveItemFromCart}
      shoppingCart={shoppingCart}></ProductGrid>
      <Contact />
    </div>

  )
}
