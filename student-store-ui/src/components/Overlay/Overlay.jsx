import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Sidebar from "../Sidebar/Sidebar";
import SubNavBar from "../SubNavBar/SubNavBar";
import { Outlet } from "react-router-dom";

export default function Overlay({
  category,
  setCategory,
  searchInput,
  setSearchInput,
}) {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <SubNavBar
        searchTerm={searchInput}
        setSearchTerm={setSearchInput}
        category={category}
        setCategory={setCategory}
      />
      <Outlet />
    </main>
  );
}
