import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import SubnavBar from "../SubnavBar/SubnavBar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({
  products,
  formData,
  handleSearch,
  handleCategoryFilter,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  return (
    <div className="home">
      <Hero />
      <SubnavBar
        formData={formData}
        handleSearch={handleSearch}
        handleCategoryFilter={handleCategoryFilter}
      />

      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
