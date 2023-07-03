import { useEffect, useState } from "react";
import "./SubNavBar.css";
import Search from "../Search/Search";

export default function SubNavBar({ setCategory }) {
  const [active, setActive] = useState("1");

  function handleClick(e) {
    e.preventDefault();
    setCategory(e.target.name);
    setActive(e.target.id);
  }

  return (
    <div className="searchAndFilter">
      <br></br>
      <br></br>
      <div className="filter">
        <ul className="category-menu">
          <li>
            <button id={"1"} name={""} onClick={handleClick}>
              All Categories
            </button>
          </li>
          <li>
            <button id={"2"} name={"food"} onClick={handleClick}>
              Food
            </button>
          </li>
          <li>
            <button id={"3"} name={"clothing"} onClick={handleClick}>
              Clothing
            </button>
          </li>
          <li>
            <button id={"4"} name={"accessories"} onClick={handleClick}>
              Accessories
            </button>
          </li>
          <li>
            <button id={"5"} name={"tech"} onClick={handleClick}>
              Tech
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
