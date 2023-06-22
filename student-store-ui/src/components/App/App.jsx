import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./App.css";
import Hero from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          <SubNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCategory={setCategory} />
          <Sidebar />
          <Switch>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/">
              <Home products={products} searchTerm={searchTerm} category={category} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}