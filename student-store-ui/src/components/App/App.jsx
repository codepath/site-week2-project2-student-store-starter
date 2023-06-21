import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
// usually put external dependencies at the top

// import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";

// TODO:
// shopping cart update
// add for product details as well

export const appInfo = {
  title: "Welcome! Find Your Merch!",
  tagline:
    "We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.",
  img_src: "./student-store-express-api/data/images.png",
};

// const url = "https://codepath-store-api.herokuapp.com/store"
const url = "http://localhost:3001"; // nonsecure
export default function App() {
  const [products, setProducts] = useState();
  const [searchInput, setSearchInput] = useState(); // used for search
  const [selectedCategory, setSelectedCategory] = useState(); // used for category filtering
  const [filteredCategoryArray, setFilteredCategoryArray] = useState(); // used for category filtering
  const [filteredSearchArray, setFilteredSearchArray] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  // const [restOfCart, setRestOfCart] = useState
  // const[shoppingCart, setShoppingCart] = useState([{itemId: 4, quantity: 2}, {itemId: 2, quantity: 1}])

  //{ {itemId: 4, quantity: 2}, {itemId: 2, quantity: 1}}

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  //  Updates searchInput state with current state of input element (render each keystroke)
  function handleSearch(event) {
    setSearchInput(event.target.value);
    let filteredItems = products?.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredSearchArray(filteredItems);
  }

  // Updates selectedCategory state with current state of input element (render each click of category)
  function handleCategoryFilter(event) {
    setSelectedCategory(event.target.value);
    let filteredItemsCategory = products?.filter((product) => {
      return (
        product.category.toLowerCase() === event.target.value.toLowerCase()
      );
    });
    setFilteredCategoryArray(filteredItemsCategory);
  }

  // function to make search and filter by category work together, also handles initial loading case
  function getFilteredProducts() {
    // initial page load
    if (!searchInput && !selectedCategory) {
      return products;
    }

    let filteredItems = products;
    if (searchInput) {
      filteredItems = filteredItems.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    if (selectedCategory) {
      filteredItems = filteredItems.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    return filteredItems;
  }

  function onToggle(event) {
    setSidebarOpen(!sidebarOpen);
  }

  function handleAddItemToCart(productId) {
    console.log("before addition", shoppingCart)
    let productInCart = shoppingCart.some((item) => item.itemId === productId);
    // console.log("product in cart? : ", productInCart)
    if (!productInCart) {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }])
      console.log('just added a new item')
    } else { // FIX
      // Increment the quantity by 1 for the item with the given item ID
      // console.log("updating quantity in shopping cart");
      let updatedItems = shoppingCart.map((item) => {

        if (item.itemId === productId) { // but not carrying previous items in cart
          return { ...item, quantity: item.quantity + 1 };
        } 
      });
      console.log("CHANGED: ", updatedItems)
      setShoppingCart(updatedItems);

    }
    console.log("after update: ", shoppingCart);
  }

  function handleRemoveItemToCart(productId) {
    // console.log("REMOVING ITEM!");
    let productInCart = shoppingCart.some((item) => item.itemId === productId);
    if (!productInCart) {
      if (quantity - 1 == 0) {
        // remove item from shopping cart array entirely
        const updatedItems = items.filter((item) => item.itemId !== productId);
        setShoppingCart(updatedItems);
      } else {
        // just regularly decrement the quantity
        // Decrement the quantity by 1 for the item with the given item ID
        const updatedItems = items.map((item) => {
          // // console.log("input", productId)
          // // console.log("finding id: " ,item.itemId)
          if (item.itemId === productId) {
            // // console.log("FOUND ITEM IN CART")
            return { ...item, quantity: item.quantity - 1 };
          }
          setShoppingCart(updatedItems);
        });
      }
    } // if item is not in shopping cart yet, just do nothing
  }

  function handleOnCheckoutFormChange(name, value) {}
  function handleOnSubmitCheckoutForm() {
    //  This function should submit the user's order to the API using the axios.post method to send a POST request to the /store endpoint.
    // The body of the POST request should be an object with two fields:
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar
            products={getFilteredProducts()}
            onToggle={onToggle}
            sidebarOpen={sidebarOpen}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            shoppingCart={shoppingCart}
          />

          <Routes>
            <Route path="" element={<Navbar />}>
              <Route
                path="/"
                element={
                  <Home
                    // handleInput={handleInput}
                    handleCategoryFilter={handleCategoryFilter}
                    handleSearch={handleSearch}
                    searchInput={searchInput}
                    // products = {filteredSearchArray.length === 0 ? products : filteredSearchArray}
                    products={getFilteredProducts()}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    // quantity={quantity}
                    // incrementQuant = {incrementQuant}
                    // decrementQuant={decrementQuant}
                  />
                }
              ></Route>

              <Route path="products/:id" element={<ProductDetail />} />

              {/* <Route path="products/:id" element={<ProductDetail quantity={quantity}/>} /> */}
            </Route>

            {/* <Route path = "*" element={<NotFound/>}/> */}
          </Routes>

          {/* <Home products = {filteredSearchArray.length === 0 ? products : filteredSearchArray} />  */}
        </main>
      </BrowserRouter>
    </div>
  );
}
