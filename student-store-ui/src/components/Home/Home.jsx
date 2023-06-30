import * as React from "react";
import "./Home.css";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import ProductGrid from "../ProductGrid/ProductGrid";
import Footer from "../Footer/Footer";


export default function Home({ products, searchTerm, category,addItem, removeItem,shoppingCart, quantity }) {



  return (
    <div className="home">
      <div className="product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <ProductGrid products={products} searchTerm={searchTerm} category={category} addItem={addItem} removeItem = {removeItem} shoppingCart={shoppingCart}/>
         <About />
         <ContactUs/>
          <Footer/>
        </div>
      </div>
    </div>

    

  );
}
