/* eslint-disable max-len */
import * as React from 'react';
import './Home.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ProductGrid from '../ProductGrid/ProductGrid';
import SubNavbar from '../SubNavBar/SubNavBar';
import Hero from '../Hero/Hero';

export default function Home({
  allProducts, category, setCategory, setSearchTerm, searchTerm, handleOnTextChange, handleOnToggle, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart,
}) {
  // filter products to display
  // remember if you put {} you need to return for the value!
  const filterProds = category !== '' ? allProducts.filter((prod) => prod.category === category) : allProducts;

  // make sure when we filter based on the search term that the products shown are still filtered by the chosen category
  // not case sensitive so normalize both to lower case
  const searchProds = searchTerm !== '' ? filterProds.filter((prod) => prod.name.toLowerCase().includes(searchTerm.toLowerCase())) : filterProds;

  return (
    <div className="home">
      <Hero />
      <SubNavbar
        category={category}
        setCategory={setCategory}
        handleOnTextChange={handleOnTextChange}
        handleOnToggle={handleOnToggle}
      />
      <ProductGrid
        products={searchProds}
        allProducts={allProducts}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
      />
      <About />
      <Contact />
    </div>

  );
}
