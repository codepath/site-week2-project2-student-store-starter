import * as React from "react";
import "./SubNavBar.css";

export default function SubNavBar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  function handleCategoryClick(event) {
    const newCategory = event.target.innerText;
    setCategory(newCategory);
  }

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              onChange={handleChange}
              placeholder="Search"
              value={searchTerm}
            />

            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu open">
            <li className={category == "All Categories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>All Categories</button>
            </li>
            <li className={category == "Clothing" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Clothing</button>
            </li>
            <li className={category == "Food" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Food</button>
            </li>
            <li className={category == "Accessories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Accessories</button>
            </li>
            <li className={category == "Tech" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
