import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { useEffec, useState } from "react";

// Components
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/product/:productsId"
              element={
                <ProductDetail />
              }
            />
            <Route 
              path="*"
              element={
                <NotFound />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
