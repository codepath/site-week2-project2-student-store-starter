import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, allProducts, checkoutForm, 
  handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  return (
    <section className="sidebar">
      <div className="shopping-cart">
        <ShoppingCart shoppingCart={ shoppingCart } allProducts={ allProducts }/>
      </div>
    </section>
  )
}

export function ShoppingCart({ shoppingCart, allProducts }) {
  if (shoppingCart.length === 0) {
    return (
      <div className="shopping-cart-content">      
      <p>No items aded to cart yet. Start shopping now!</p>
    </div>
    )
  } else {
    let subTotal = 0
    let cartProducts = []
    shoppingCart.forEach(cartItem => {
      let product = allProducts.find((prod) => prod.id === cartItem['itemId'])
      product['quantity'] = cartItem['quantity']
      cartProducts.push(product)
      subTotal += product.price * cartItem['quantity']
    });
    subTotal = subTotal.toFixed(2)
    let taxes = (subTotal * 0.0875).toFixed(2)
    let total = parseFloat(subTotal + taxes).toFixed(2)

    return (
      <div className="shopping-cart-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            { cartProducts.map((cartProd, idx) => (
              <tr key={"cart-item" + idx}>
                <td className="card-product-name">{ cartProd.name }</td>
                <td className="cart-product-quantity">{ cartProd.quantity }</td>
                <td>${ cartProd.price }</td>
                <td>${ (cartProd.price * cartProd.quantity).toFixed(2) }</td>
              </tr>
            )) }
          </tbody>
          <tfoot>
            <tr>
              <td><strong>Subtotal</strong></td>
              <td></td>
              <td></td>
              <td className="subtotal">${ subTotal }</td>
            </tr>
            <tr>
              <td><strong>Taxes and Fees</strong></td>
              <td></td>
              <td></td>
              <td>${ taxes }</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td></td>
              <td></td>
              <td className="total-price">${ total }</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}
