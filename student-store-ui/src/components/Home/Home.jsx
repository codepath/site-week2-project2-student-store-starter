import React, { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";
import ProductContainer from "../ProductContainer/ProductContainer";

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

  const productFilter = products?.filter((product) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">
      <Hero />
      <br />
      <Menu
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <ProductContainer products={productFilter} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
