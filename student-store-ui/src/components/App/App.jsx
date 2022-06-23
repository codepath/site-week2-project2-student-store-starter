import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import defaultCart from "../../constants/cart";
import defaultProducts from "../../constants/products";

export default function App() {
  const [cart, setCart] = React.useState(defaultCart);
  const [products, setProducts] = React.useState(defaultProducts);
  const updateProductInCart = (id, count) => setCart((prev) => ({ ...prev, [id]: count }));
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar cart={cart} products={products} />
          <div className={"content"}>
            <Navbar />
            <Home cart={cart} setCart={setCart} />
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
