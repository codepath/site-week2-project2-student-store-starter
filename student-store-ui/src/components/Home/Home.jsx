import * as React from "react"
import { useState, useMemo } from "react";
import ProductGrid from "../ProductGrid/ProductGrid"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Home.css"

export default function Home(props) {

  let products = props.products

  const [activeCategory, setCategory] = React.useState(null)
  const [search, setSearch] = React.useState('')
  const [cart, setCart] = useState([]);

  const addToCart = (el) => {
    setCart([...cart, el]);
};

const cartItems = cart.map((el) => (
  <div key={el.id}>
    {`${el.name}: $${el.price}`}
    <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
  </div>
));

const removeFromCart = (el) => {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
  setCart(hardCopy);
};

  // Sidebar
  let [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
    } else {
      setSidebarOpen(false)
    }
  }

  const closeHandler = () => {
    setSidebarOpen(false)
  }

  let sidebar;
  if (sidebarOpen) {
    sidebar = <Sidebar shoppingCart={cart} close={closeHandler} sidebar={"sidebar"}/>
  }
  // product grid, about, contact, and footer.

  // Filter
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

 function getFilteredList() {
    if (!activeCategory) {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }

let filteredList = useMemo(getFilteredList, [activeCategory, products]);

// Search
function handleSearchChange(event) {
  setSearch(event.target.value);
}

if (search.length > 0) {
  filteredList = filteredList.filter((i) => {
    return i.name.toLowerCase().match(search.toLowerCase())
  });
}

  return (
    <div className="home">
      <div className="hero">
        <div className="content">
          <div className="intro">
          <h1>Welcome!</h1>
          <h1>Buy Some Stuff!</h1>
          </div>
        </div>
      </div>
      <button onClick={openHandler}>Open Shopping Cart</button>
      {sidebar}
      <input placeholder="Search For a Product" onChange={handleSearchChange} type="text" name="search-input"></input>
      <div className="sub-navbar">
      <select
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
      >
         <option value="">All Categories</option>
         <option value="clothing">Clothing</option>
         <option value="food">Food</option>
         <option value="accessories">Accessories</option>
	 <option value="tech">Tech</option>
      </select>
      </div>
      <ProductGrid products={filteredList} addToCart={addToCart} />
      <div className="about">
      <p> I'm the about section</p>
      </div>
      <div className="contact">
        <p> This is where the contact info would be IF I HAD ANY &gt;:( </p>
      </div>
      <div className="Footer">
        <p> I am the footer </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div className="hero">
      <p className="intro">Welcome!</p>
    </div>
  )
}

export function Contact() {
  return (
    <div className="contact">
      <p>I'm the contact section</p>
    </div>
  )
}

export function Footer() {
  return (
    <div className="footer">
      <p>I'm the footer</p>

    </div>
  )
}