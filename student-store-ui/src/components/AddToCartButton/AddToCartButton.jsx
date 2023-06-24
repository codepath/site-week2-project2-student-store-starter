import { useContext } from "react";
import "../AddToCartButton/AddToCartButton.css";
import { CheckoutCartContext, CheckoutCartDispatchContext } from "../CheckoutCartContext/CheckoutCartContext";
export default function AddToCartButtton({ product, checkoutCart, dispatch }){
    // const checkoutCart = useContext(CheckoutCartContext); // cart context
    // const dispatch = useContext(CheckoutCartDispatchContext);
    const activeClass = checkoutCart[product.id]?.quantity > 0 ? "active" : "" // helps toggle button appearence

    function handleAddToCartOnClick(event, product){
        if (event.target.className == "product-quantity "){
            event.target.id = "increment";
            handleProductButtonOnClick(event, product);
        }
    }
    function handleProductButtonOnClick(event, product) {
        // this handler will update the cart
        // after a user clicks the plus/minus sign

        event.preventDefault();
        let type = event.target.id + "ed"; // using id attribute to get dispatch type
        dispatch({
            productID: product.id,
            type : type,
            product : product
        });
    };
    return (
        <div className="product-buttons">
            <button type="button" id="increment" onClick={(e) => handleProductButtonOnClick(e, product)} className={"product-button " + activeClass}>
                <i id="increment" className="material-icons">add</i>
            </button>
            <p className={"product-quantity " + activeClass} onClick={(e) => handleAddToCartOnClick(e, product)}>
                {checkoutCart[product.id]?.quantity > 0 ? checkoutCart[product.id]?.quantity : "Add To Cart"}
            </p>
            <button type="button" id="decrement" onClick={(e) => handleProductButtonOnClick(e, product)} className={"product-button " + activeClass}>
                <i id="decrement" className="material-icons">remove</i>
            </button>
        </div>
    )
}