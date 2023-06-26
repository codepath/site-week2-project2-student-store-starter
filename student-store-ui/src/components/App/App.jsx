import * as React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import About from "../About/About";
import ProductDetails from "../Product Details/ProductDetails";
import Overlay from "../Overlay/Overlay";

export default function App() {
  const url = "http://localhost:3001/store";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [quantity, setQuantity] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [receipt, setReceipt] = useState({});
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setProducts(response.data.products);
    });
  }, []);

  useEffect(() => {
    /*function that sets total by mapping over shoppingCart*/
  }, [shoppingCart]);

  function addItem(productId) {
    let isAlreadyOpen = shoppingCart.some(
      (product) => product.id === productId
    );

    if (isAlreadyOpen) {
      let i = shoppingCart.findIndex((product) => product.id === productId);
      let updatedCart = [...shoppingCart];
      
      updatedCart[i] = {
        id: updatedCart[i].id,
        quantity: ++updatedCart[i].quantity,
      };
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, { id: productId, quantity: 1 }]);
    }
  }

  function removeItem(productId) {
    let isAlreadyOpen = shoppingCart.some(
      (product) => product.id === productId
    );

    if (isAlreadyOpen) {
      let i = shoppingCart.findIndex((product) => product.id === productId);
      let updatedCart = [...shoppingCart];
      if (updatedCart[i].quantity === 1) {
       updatedCart = updatedCart.toSpliced(i,1)
      }

      if (updatedCart[i]?.quantity > 0) {
      updatedCart[i] = {
        id: updatedCart[i].id,
        quantity: --updatedCart[i].quantity,
      };}
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, { id: productId, quantity: 1 }]);
    }
  }

  const handleOnSubmitCheckout = () => {
    setReceipt({
      name: checkoutForm.name,
      email: checkoutForm.email,
      shoppingCart: shoppingCart,
    });
    setShoppingCart([]);
    setCheckoutForm({ name: "", email: "" });
    setTotalPrice(0);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path=""
              element={
                <Overlay
                  category={category}
                  setCategory={setCategory}
                  searchInput={searchTerm}
                  setSearchInput={setSearchTerm}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  products={products}
                />
              }
            >
              <Route
                path=""
                element={
                  <Home
                    products={products}
                    searchTerm={searchTerm}
                    category={category}
                    addItem={addItem}
                    removeItem={removeItem}
                    shoppingCart={shoppingCart}
                  />
                }
              />

              <Route path="/products/:id" element={<ProductDetails addItem={addItem}
                    removeItem={removeItem} />} />
              <Route path="" element={<About />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
