import * as React from "react"
import "./Sidebar.css"
import sidebarIcon from "./sidebar-icon.png"

export default function Sidebar({ itemList, productCart, productCartSet, url }) {

  // States and DOM references

  const emailInputRef = React.useRef(null)
  const nameInputRef = React.useRef(null)

  const [activeSidebar, activeSidebarSetter] = React.useState(false)
  const [activeCheckout, activeCheckoutSetter] = React.useState(false)
  const [receiptData, receiptDataSetter] = React.useState(null)

  // Helper functions

  function handleCheckout() {

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;

    if (name.length === 0 || email.length === 0) return;

    const userJSON = {
      name: name,
      email: email
    };

    const productCartArray = Array.from(productCart);
    const productCartJSON = productCartArray.map(([key, value]) => ({
      id: key,
      quantity: value
    }));

    const dataJSON = JSON.stringify({
      user: userJSON,
      productCart: productCartJSON
    });

    postProductCart(dataJSON);

  }

  // Async functions / POST/GET requests

  async function postProductCart(productData) {

    const res = await fetch(url + "/checkout", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: productData,
    });

    const resData = await res.json();

    const updatedReceiptData = [
      resData.id,
      resData.name,
      resData.email,
      resData.subtotal,
      resData.total
    ]

    receiptDataSetter(updatedReceiptData);

    activeCheckoutSetter(!activeCheckout)

    productCartSet(new Map());
    emailInputRef.current.value = '';
    nameInputRef.current.value = '';
  }

  // Components / Sidebar, ProductGrid, CheckoutReceipt

  function Sidebar() {
    return (
      <section className="sidebar" style={{'width':`${activeSidebar ? '300px' : '80px'}`}}>
        <img id="change-sidebar-btn" src={sidebarIcon} onClick={() => activeSidebarSetter(!activeSidebar)}/>
        <h1 id="shopping-cart-text" style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}}>shopping ca(r)t !</h1>
        <form id="checkout-form">
          <input type="text" id="email" name="email" placeholder="Email" ref={emailInputRef} style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}}/>
          <input type="text" id="name" name="name" placeholder="Name" ref={nameInputRef} style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}}/>
        </form>
        <button id="checkout-button" style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}} onClick={() => {
          if (nameInputRef.current.value !== '' && emailInputRef.current.value !== '') {
            handleCheckout()
          }
        }}>Checkout !</button>
        {
          ProductCartGrid()
        }
        {
          (activeCheckout) ? CheckoutReceipt() : <h3 className="receipt-text" style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}}>Your receipt will appear here.</h3>
        }
      </section>
    )
  }

  function ProductCartGrid() {
    return (
      <div id="shopping-cart-grid" style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}}>
      {
        Array.from(productCart).map(([id, amount]) => {
          if (amount !== 0) {
            return (
              <div className="shopping-cart-item" key={id} style={{'visibility':`${amount} !== 0 ? 'visible' : 'hidden'}`}}>
                <h1>{itemList[id - 1].name}</h1>
                <h3>x{amount} | ${ Math.round(itemList[id - 1].price * amount * 100) / 100 }</h3>
              </div>
            )
          }
        })
      }
      </div>
    )
  }

  function CheckoutReceipt() {
    return (
      (receiptData) ?
      <div id="receipt">
        <h3 className="receipt-text">{"Purchase ID: " + receiptData[0]}</h3>
        <h3 className="receipt-text">{"Name: " + receiptData[1]}</h3>
        <h3 className="receipt-text">{"Email: " + receiptData[2]}</h3>
        <h3 className="receipt-text">
        {
          Array.from(productCart).map(([id, quantity]) => {
            <h3>{itemList[id - 1].name + '|' + itemList[id - 1].price * quantity}</h3>
          })
        }
        </h3>
        <h3 className="receipt-text">{"Subtotal: $" + Math.round(receiptData[3] * 100) / 100 + " USD"}</h3>
        <h3 className="receipt-text">{"Total: $" + Math.round(receiptData[4] * 100) / 100 + " USD"}</h3>
        <h2 className="receipt-text">Purchase stored in our "database"!</h2>
      </div>
      :
      <h3 className="receipt-text" style={{'visibility':`${activeSidebar ? 'visible' : 'hidden'}`}}>Loading receipt...</h3>
    )
  }

  // Returning components

  return Sidebar()
}
