import { useState } from "react";
import "./Search.css";


export default function Search({ setSearchTerm }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <input type="search" onChange={handleChange} placeholder="Search products..." />
  );
}
