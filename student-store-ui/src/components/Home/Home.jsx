
import React, { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

// for filtering
  const productFilter = products?.filter((product) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    return matchesSearch && matchesCategory;
  });
  // for product details
  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <div className="home">
      <Hero />
      <br></br>
      <div className="Menu-bar">
        <div className="Search-bar-and-filter" >
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search!"
          />
          <br></br>
          <br></br>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "selected" : ""}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      <div className="product-container">
        {productFilter?.map((product, idx) => {
          return (
              <Link key={idx} to={"products/" + product.id}>
              <div
              className="product"
              key={product.id}
              onClick={() => setSelectedProduct(product)} // Set the selected product
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
              </Link>
    
          );
        })}
      </div>

      <div className="About">
        <h1>About</h1>
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.

            We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.

            All proceeds go towards bringing high quality CS education to college students around the country.</p>
            <img
              src= "https://cdn.icon-icons.com/icons2/3179/PNG/512/coding_computer_pc_screen_code_icon_193955.png"
            />

      </div>
      
    <div className="Contact-Me">
        {/* <h1>Contact Us!</h1> */}
        <div className="contact-info">
          <p>Contact Us</p>
          <p>Email: code@path.org</p>
          <p>Phone: 1-800-CODEPATH</p>
          <p>Address: 123 Fake Street, San Francisco, CA</p>
          <p>Social: Icons</p>
        </div>
          <div className="Contactimg">
            <img
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/contact-us-icon.png"
            />
          </div>
       
         </div>
     
      <div className="Footer">
        <Footer/>
      </div>
    </div>
    
    
  );
}
