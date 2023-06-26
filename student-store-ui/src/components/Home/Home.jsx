import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Subnavbar from "../Subnavbar/Subnavbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Sidebar from "../Sidebar/Sidebar";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) {
  //create new state

  return (
    //puts together all of the components and displays them
    <div className="home">
      <Navbar />
      <Hero />
      {/* second navbar */}
      <Subnavbar
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
      />
      <Sidebar
        className="sidebar"
        products={products}
        shoppingCart={shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />

      <About />
      <Contact />
      <Footer />
    </div>
  );
}
