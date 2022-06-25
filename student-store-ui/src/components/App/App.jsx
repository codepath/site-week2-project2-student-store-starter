import * as React from "react"
import axios from 'axios';

import { API_BASE_URL } from "../../../constants"

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound";
import Purchases from "../Purchases/Purchases"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const checkoutFormInitState = {
    'name': '',
    'email': ''
  }

  const [products, setProducts] = React.useState([]);
  const [isFetching, setFetching] = React.useState(false);
  const [isCreating, setIsCreating] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState(checkoutFormInitState);
  const [lastReceipt, setLastReceipt] = React.useState({});
  const [purchases, setPurchases] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState("closed");

  // fetch when mounted
  React.useEffect(() => {
    setFetching(true);
    const fetchPurchases = async () => {

      try {
        const response = await axios.get(`${API_BASE_URL}/store/purchases`);
        console.log(response);
        if (response?.data?.purchase) {
          // set data if response is not undefined
          setPurchases(response?.data?.purchase);
        }
      } catch (error) {
        console.log("fetch error: ", error);
      } finally {
        //set useState false after doing request

      }
      setFetching(false);
    }
    fetchPurchases();
  }, []);

  // initialize application with a GET request retrieving all products that will be displayed
  React.useEffect(() => {
    const getProducts = async () => {
      setFetching(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/store/`);
        if (response?.data?.products) {
          // set data if response is not undefined
          setProducts(response?.data?.products);
        }
      } catch (error) {
        console.log("fetch error: ", error);
      } finally {
        //set useState false after doing request
        setFetching(false);
      }
    }
    getProducts();
  }, []);

  // handle form values
  const handleOnCheckoutFormChange = (change) => {
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [change.target.name]: change.target.value
    }))
  }


  //handle on checkout form button for POST request
  const handleOnSubmitCheckoutForm = async (isTermsRead) => {
    if ((shoppingCart.length > 0)) {
      setIsCreating(true);

      await axios.post(`${API_BASE_URL}/store/`, {
        user: checkoutForm,
        shoppingCart: shoppingCart
      })
        .then((res) => {
          console.log("purchase order created succesfully! ", res);
          // state for Receipt component
          setLastReceipt(res.data.purchase);
        }).catch((error) => {
          console.error("CREATING PURCHASE ORDER ERROR: ", error);
        })
      setIsCreating(false);

      // reset states
      setCheckoutForm(checkoutFormInitState);
      setShoppingCart([]);

    } else {
      console.log("shopping cart is empty! can't submit")
    }
  }

   //sidebar open/closed handler for display
   const handleOnToggle = () => {
    if (isOpen === "open") {
      setIsOpen("closed");
    } else {
      setIsOpen("open");
    }
  }
  /**
   * handleAddItemToCart / handleRemoveItemToCart are in charge 
   * of adding/removing objects into the shopping cart array. 
   * @param {Object} product 
   */
  // shopping cart handlers 
  const handleAddItemToCart = (product) => {
    let newProduct = {
      'itemId': 0,
      'quantity': 0
    };
    newProduct.itemId = product.id;

    //if it did not exist set quantity to one and add to state array
    if ((!shoppingCart.find((cartProduct) => cartProduct.itemId === product.id))) {
      newProduct.quantity = 1;
      setShoppingCart((prevCart) => [...prevCart, newProduct]);
    } else {
      //if cart product exists:
      //find cart product and get previous count
      let existingProduct = shoppingCart.find((cartProduct) => cartProduct.itemId === product.id);
      newProduct.quantity = existingProduct.quantity + 1;

      //get all the elements except new
      let shoppingCartNew = shoppingCart.filter((e) => {
        return e.itemId !== newProduct.itemId;
      })

      //append to state array
      setShoppingCart([...shoppingCartNew, newProduct]);

    }
    console.log(`item:${newProduct.itemId} incremented ${newProduct.quantity}`); // debug
  }
  /**
   * handleAddItemToCart / handleRemoveItemToCart are in charge 
   * of adding/removing objects into the shopping cart array. 
   * @param {Object} product 
   */
  const handleRemoveItemFromCart = (product) => {
    //product we will want to add
    let newProduct = {
      itemId: 0,
      quantity: 0
    };

    newProduct.itemId = product.id;

    //find if product exists 
    let findProduct = shoppingCart.find((cartProduct) => cartProduct.itemId === product.id);
    if (findProduct) {
      //if the count is not 0, decrease by one
      if ((findProduct.quantity - 1) === 0) {
        // get shopping cart without the item so we can "delete" it by filtering
        let shoppingCartNew = shoppingCart.filter((e) => {
          return e.itemId !== newProduct.itemId;
        })

        // update cart
        setShoppingCart(shoppingCartNew);

        console.log(`item: ${newProduct.itemId} removed from cart`);
      } else if ((findProduct.quantity - 1) > 0) {
        newProduct.quantity = findProduct.quantity - 1;

        //get all the elements except new
        let shoppingCartNew = shoppingCart.filter((e) => {
          return e.itemId !== newProduct.itemId;
        })
        // append again
        setShoppingCart([...shoppingCartNew, newProduct])
        console.log(`item: ${newProduct.itemId} decremented ${newProduct.quantity}`);
      }
    }
  }

  //check if fetching to prevent undefined errors
  if (isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            products={products}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            lastReceipt={lastReceipt} 
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}/>
          <Routes>
            <Route path="/purchases/" element={<Purchases isFetching={isFetching} purchases={purchases} />} />
            <Route path="/"
              element={<Home
                isFetching={isFetching}
                products={products}
                setShoppingCart={setShoppingCart}
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart} />} />
            <Route path="/products/:productId"
              element={<ProductDetail
                products={products}
                setShoppingCart={setShoppingCart}
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart} />
              } />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </main>
      </BrowserRouter>
    </div>
  )
}