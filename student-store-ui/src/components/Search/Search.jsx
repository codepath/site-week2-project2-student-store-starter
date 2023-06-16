import { useState } from "react";

export default function Search({ setText, text }) {
  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <form style={{ margin: "20px auto" }}>
      <input type="input" placeholder="Search..." onChange={handleChange} />
    </form>
  );
}
