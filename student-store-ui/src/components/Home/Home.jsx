import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";


export default function Home({ products }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Search handleSearch={handleSearch} products={ products }/>
      <Navbar />
    </div>
  );
}
