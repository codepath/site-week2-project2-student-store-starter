import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";

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
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [nameTerm, setNameTerm] = useState("");
  const [emailTerm, setEmailTerm] = useState("");

  // Example of shopping cart => {{itemId: 4, quantity: 2}, {itemId: 2, quantity: 1}}
// TODO: FIX PRODUCT NOT FOUND PAGE
// TODO: PRODUCT QUANTITY NEEDS TO MATCH ON PRODOCUTVE VIEW
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

  // Makes search and filter by category work together, also handles initial loading case (display no products)
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

  // Sets the sidebar state to open/closed
  function onToggle(event) {
    setIsOpen(!isOpen);
  }

  // Add a product with input ID to the shoppingCart 
  // If product isn't already in the shopping cart, and set its quantity to 1.
  // If the product is already in the shopping cart, increment its quantity by 1.
  function handleAddItemToCart(productId) {
    let isAlreadyInCart = shoppingCart.some( product => product.itemId === productId);
    if (isAlreadyInCart) {
      let index = shoppingCart.findIndex(product => product.itemId === productId);
      let updatedCart = [...shoppingCart];
      updatedCart[index] = {itemId: updatedCart[index].itemId, quantity: ++updatedCart[index].quantity}
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, {itemId: productId, quantity: 1}])
    }
  }

  // Decrease the quantity of a product with input ID in the shoppingCart by 1, but only if it is in the shopping cart.
  // If the new quantity is 0, it should remove the item from the shoppingCart.
  function handleRemoveItemToCart(productId) {
    let isAlreadyInCart = shoppingCart.some( product => product.itemId === productId);
    if (isAlreadyInCart) {
      let index = shoppingCart.findIndex(product => product.itemId === productId);
      let updatedCart = [...shoppingCart]
      if (updatedCart[index].quantity - 1 == 0) {
        // remove item from shopping cart array entirely
        updatedCart = shoppingCart.filter((item) => item.itemId !== productId);
        setShoppingCart(updatedCart);
      } else {
        // Decrement the quantity by 1 for the item with the given item ID
        updatedCart[index] = {itemId: updatedCart[index].itemId, quantity: --updatedCart[index].quantity}
      }
      setShoppingCart(updatedCart);
    };
  }  // if item is not in shopping cart yet, just do nothing

  function handleOnCheckoutFormChange(name, value) {}
  function handleOnSubmitCheckoutForm() {
    //  This function should submit the user's order to the API using the axios.post method to send a POST request to the /store endpoint.
    // The body of the POST request should be an object with two fields:
  }

  // Sets the checkout form as submitted
  function handleCheckout(event){
    setCheckoutSubmitted(true)
  }

  // Sets the checkout form as not submitted and resets name and email inputs from use
  function handleShopMore(event){
    setCheckoutSubmitted(false);
    setNameTerm("")
    setEmailTerm("")
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar 
            key={"sidebar"}
            products={getFilteredProducts()}
            onToggle={onToggle}
            isOpen={isOpen}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            shoppingCart={shoppingCart}
            checkoutSubmitted={checkoutSubmitted}
            handleCheckout={handleCheckout}
            handleShopMore={handleShopMore}
            nameTerm={nameTerm}
            setNameTerm={setNameTerm}
            emailTerm={emailTerm}
            setEmailTerm={setEmailTerm}
          />

          <Routes>
            <Route path="" element={<Navbar />}>
              <Route
                path="/"
                element={
                  <Home
                    handleCategoryFilter={handleCategoryFilter}
                    handleSearch={handleSearch}
                    searchInput={searchInput}
                    products={getFilteredProducts()}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    shoppingCart={shoppingCart}
                    handleCheckout={handleCheckout}
                  />
                }
              ></Route>

              <Route path="products/:id" element={<ProductDetail shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>} />
            </Route>

            {/* <Route path = "*" element={<NotFound/>}/> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
