import "./ShoppingCart.css"
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { TAX_PERCENTAGE } from "../../constants"
export default function ShoppingCart(props) {
  let subtotal;
  let tax;
  let grandTotal;

  const calculateTotals = () => {
    subtotal = 0;
    //calculate subtotal by finding each shopping cart product's price
    props.shoppingCart.forEach((cartProduct) => {
      subtotal += props.products.find(product => product.id === cartProduct.itemId).price * cartProduct.quantity;
    })
    tax = subtotal * TAX_PERCENTAGE;
    grandTotal = subtotal + tax;
  }
  //each time shopping cart re-renders, we should update the subtotal
  calculateTotals();
  

  const getShoppingCartItems = () => {
    return (
      props.shoppingCart.map((e) => {
        let cartProduct = props.products.find(product => product.id === e.itemId);

        if ((e.quantity > 0) && (cartProduct !== undefined)) {
          return <ShoppingCartItem key={e.itemId} item={cartProduct} quantity={e.quantity} />
        }
      })
    )
  }

  if (props.shoppingCart.length > 0) {
    return (

      <div>
        <table className="cart-table">
          <ShoppingCartHeader />

          {/* cart items rows get rendered here */}
          {getShoppingCartItems()}

          {/* summary */}
          <tr className="cart-table-column">
            <th className="cart-table-row"></th>
            <th className="cart-table-row">Subtotal</th>
            <th className="cart-table-row">Tax</th>
            <th className="cart-table-row">Grand Total</th>
          </tr>
          <tr className="cart-table-column">
          <th className="cart-table-row"></th>
            <th className="cart-table-row">${subtotal}</th>
            <th className="cart-table-row">${tax.toFixed(2)}</th>
            <th className="cart-table-row">${grandTotal.toFixed(2)}</th>
          </tr>
        </table>
      </div >
    )
  } else {
    return <h1>Start shopping now!</h1>
  }
}

export function ShoppingCartHeader() {
  return (
    <tr className="cart-table-column">
      <th className="cart-table-row">Name</th>
      <th className="cart-table-row">Quantity</th>
      <th className="cart-table-row">Price</th>
      <th className="cart-table-row">Total</th>
    </tr>
  )
}