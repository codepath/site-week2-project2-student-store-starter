import { useEffect, useState } from "react";
import "./SubNavBar.css";

export default function SubNavBar({}) {
  return (
    <div className="searchAndFilter">
      <br></br>
      <br></br>
      <div className="filter">
        <ul className="category-menu">
          <li>
            <button id={"1"} name={""}>
              All Categories
            </button>
          </li>
          <li>
            <button id={"2"} name={"food"}>
              Food
            </button>
          </li>
          <li>
            <button id={"3"} name={"clothing"}>
              Clothing
            </button>
          </li>
          <li>
            <button id={"4"} name={"accessories"}>
              Accessories
            </button>
          </li>
          <li>
            <button id={"5"} name={"tech"}>
              Tech
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
