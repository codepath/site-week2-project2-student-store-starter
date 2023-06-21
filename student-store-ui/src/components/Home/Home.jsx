import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
// import Sidebar from "../Sidebar/Sidebar";
import Subnavbar from "../Subnavbar/Subnavbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Sidebar from "../Sidebar/Sidebar";

export default function Home({ products, category }) {
  //create new state

  return (
    //puts together all of the components and displays them
    <div className="home">
      <Navbar />
      <Hero />
      {/* second navbar */}
      <Subnavbar products={products} />
      <Sidebar className="sidebar" />

      <About />
      {/* <Sidebar /> */}
      <Contact />
      <Footer />
    </div>
  );
}
