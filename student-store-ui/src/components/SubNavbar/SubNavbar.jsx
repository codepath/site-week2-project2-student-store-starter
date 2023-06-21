import { useEffect, useState } from "react";
import "./SubNavbar.css";

export default function SubNavbar({ setCategory, setSearchTerm  }) {
  const [active, setActive] = useState("1");

  function handleClick(e) {
    e.preventDefault();
    setCategory(e.target.name);
    setActive(e.target.id);
  }

  function handleCategoryClick(e) {
    e.preventDefault();
    setCategory(e.target.name);
    setActive(e.target.id);
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="categories">
      <ul className="category-menu">
        <li className="is-active">
          <button id={"1"} 
          className="cloth" name={""} 
          onClick={handleClick}>
            All Categories
          </button>
        </li>
        <li>
          <button
            id={"2"}
            className="cloth"
            name={"clothing"}
            onClick={handleClick}
          >
            Clothing
          </button>
        </li>
        <li>
          <button
            id={"3"}
            className="cloth"
            name={"food"}
            onClick={handleClick}
          >
            Food
          </button>
        </li>
        <li>
          <button
            id={"4"}
            className="cloth"
            name={"accessories"}
            onClick={handleClick}
          >
            Accessories
          </button>
        </li>
        <li>
          <button
            id={"5"}
            className="cloth"
            name={"tech"}
            onClick={handleClick}
          >
            Tech
          </button>
        </li>
      </ul>
      <input 
        type="search" 
        onChange={handleSearchChange} 
        placeholder="Search products..." 
      />
    </div>
  );
}