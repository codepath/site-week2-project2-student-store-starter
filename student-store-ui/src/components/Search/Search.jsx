import React, { useEffect, useState } from "react";

export default function Search({ setSearchQuery }) {
  return (
    <label>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
      {/* <input type="submit" value="Submit" /> */}
    </label>
  );
}
