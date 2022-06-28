import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "../Orders/Orders"

import api from "../api/api";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
export default function App() {
  const [products, setProducts] = React.useState([]);

  const [isFetching, setisFetching] = React.useState(true);

  const [error, seterror] = React.useState("");

  const [isOpen, setisOpen] = React.useState(false);

  const [lastReceipt, setLastReceipt] = React.useState({});
   const [orders, setOrders] = React.useState({});
  const [shoppingCart, setshoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "",
    email: "",
  });

  const handleRemoveItemFromCart = (productID) => {
    var value = shoppingCart.find((element) => {
      if (element.itemId == productID) {
        return true;
      }
    });
    if (value != undefined) {
      const newItems = shoppingCart.map((element) => {
        console.log(element.itemId);
        if (element["quantity"] > 1) {
          if (element.itemId == productID) {
            return { ...element, quantity: element["quantity"] - 1 };
          }
        } else {
          return shoppingCart.filter((e) => e.itemId !== productID);
        }

        return element;
      });
      setshoppingCart(newItems);
      console.log("hey");
    } else {
      console.log("massa");
    }
  };

  function handleOnCheckOutFormChange(change) {
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [change.target.name]: change.target.value,
    }));
  }

  const handleAddItemToCart = (productID) => {
    var value = shoppingCart.find((element) => {
      if (element.itemId == productID) {
        return true;
      }
    });
    if (value == undefined) {
      let value = { itemId: productID, quantity: 1 };

      setshoppingCart([...shoppingCart, value]);
      console.log(shoppingCart);
    } else {
      const newItems = shoppingCart.map((element) => {
        console.log(element.itemId);
        if (element.itemId == productID) {
          return { ...element, quantity: element["quantity"] + 1 };
        }
        return element;
      });
      setshoppingCart(newItems);
      // shoppingCart.map((element) => {
      //   if (element.itemId == productID) {
      //     element['quantity'] = element['quantity'] + 1
      //   }
      // })
    }
  };

  const handleOnToggle = (isOpen) => {
    setisOpen(!isOpen);
  };
  const getData = async () => {
    let response = await axios.get("http://localhost:3001/store/");
    setProducts(response.data.products);
    setisFetching(false);
  };

  const handleOrderClick = () => {
    getOrders()
  }



  const handleOnSubmitCheckoutForm = () => {
    console.log("Hello Button");
    console.log(checkoutForm);
    PostServer();

    setshoppingCart([]);
  };

  React.useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  ///////Posting to server

  async function PostServer() {
    try {
      let response = await axios.post("http://localhost:3001/store", {
        user: checkoutForm,
        shoppingCart,
      });

      setLastReceipt(response.data);

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function getOrders()
  {
    try {
      let response = await axios.get("http://localhost:3001/orders")

      setOrders(response.data)

    }
    catch (err)
    {
      seterror(err)
    }
  }

  //   setShoppingCart([])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar orders={orders} setOrders={setOrders} handleOrderClick={handleOrderClick}  />
          <Sidebar
            lastReceipt={lastReceipt}
            handleOnCheckOutFormChange={handleOnCheckOutFormChange}
            isOpen={isOpen}
            setisOpen={setisOpen}
            handleOnToggle={handleOnToggle}
            checkoutForm={checkoutForm}
            products={products}
            shoppingCart={shoppingCart}
            setshoppingCart={setshoppingCart}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
          <Routes>
            {isFetching ? (
              ""
            ) : (
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    shoppingCart={shoppingCart}
                    setshoppingCart={setshoppingCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                  />
                }
              />
            )}
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products.products}
                  shoppingCart={shoppingCart}
                  setshoppingCart={setshoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} /> 
            <Route path="/orders" element={<Orders orders={orders} setOrders={setOrders} handleOrderClick={handleOrderClick} />}  />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
