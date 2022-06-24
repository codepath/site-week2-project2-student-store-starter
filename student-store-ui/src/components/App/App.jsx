import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/constants";
import axios from "axios";

// Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
  const [products, setProducts] = useState([{}]);
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingCheckoutForm, setIsFetchingCheckoutForm] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    email: "",
    name: "",
  });

  // Handlers

  const handleOnToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddItemToCart = (product) => {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === product.id) {
        shoppingCart[i].quantity += 1;

        setShoppingCart((shoppingCart) => [...shoppingCart]);
        return;
      }
    }

    const newObject = {
      itemId: product.id,
      name: product.name,
      description: product.description,
      quantity: 1,
      price: product.price,
    };

    product.quantity = 1;

    setShoppingCart((shoppingCart) => [...shoppingCart, newObject]);
  };

  const handleRemoveItemFromCart = (product) => {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id == product.id) {
        if (shoppingCart[i].quantity > 1) {
          shoppingCart[i].quantity -= 1;
          setShoppingCart((shoppingCart) => [...shoppingCart]);
          return;
        }
        shoppingCart[i].quantity -= 1;
        shoppingCart.splice(i, 1);
        setShoppingCart((shoppingCart) => [...shoppingCart]);
        return;
      }
    }
  };

  const handleCheckoutFormChange = (name, value) => {
    const prev = checkoutForm;
    const _new = {
      ...prev,
      [name]: value,
    };

    setCheckoutForm(_new);
  };

  const handleOnSubmitCheckoutForm = async () => {
    setIsFetchingCheckoutForm(true);

    try {
      if (checkoutForm.email == "" || checkoutForm.name == "") {
        setError("You need to complete the information");
        setIsFetchingCheckoutForm(false);
        return;
      }
      if (shoppingCart.length == 0) {
        setError("You need to select at least one item");
        setIsFetchingCheckoutForm(false);
        return;
      }

      const response = await axios.post(`${API_URL}/store`, {
        user: checkoutForm,
        shoppingCart,
      });
      setIsFetchingCheckoutForm(false);
      if (response.statusText != "Created") {
        setError("Server error");
        setSuccessMsg("");
        return;
      }
      setError("");
      setSuccessMsg("Success!");

      // Empty shopping cart
      setShoppingCart([]);

      // Reset checkoutForm
      setCheckoutForm({
        email: "",
        name: "",
      });
    } catch (error) {
      setError("Server error");
    }
  };

  // Fetching

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsFetching(true);

    try {
      const response = await axios.get(API_URL + "/store");

      setProducts(response.data.products);
    } catch (error) {
      console.error("Server error");
      setError("Server error");
    }

    setIsFetching(false);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <div className="main">
            <Sidebar
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              products={products}
              checkoutForm={checkoutForm}
              error={error}
              isFetching={isFetching}
              successMsg={successMsg}
              handleOnToggle={handleOnToggle}
              handleCheckoutFormChange={handleCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            />
            {!isFetching && (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      products={products}
                      shoppingCart={shoppingCart}
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemFromCart={handleRemoveItemFromCart}
                      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    />
                  }
                />
                <Route
                  path="/product/:productsId"
                  element={
                    <ProductDetail
                      products={products}
                      shoppingCart={shoppingCart}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
