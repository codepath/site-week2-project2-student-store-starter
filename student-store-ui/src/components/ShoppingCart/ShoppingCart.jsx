import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
    const calculateSubTotal = (price, quantity) => price * quantity;
    let subtotal = 0;
    // const calculateOrderSubTotal = (items) => {
    //     return items.reduce((prevVal, currVal) => {
    //         prevVal + calculateSubTotal(currVal.price, currVal.quantity), 0
    //     });
    // }

    const calculateTaxes = (total) => total * .0875;
    const calculateOrderTotal = (subtotal) => subtotal += calculateTaxes(subtotal);

    const cartOpen = isOpen ? "open" : "closed";
    //console.log(shoppingCart);

    const getProduct = (itemId) => {
        //console.log(itemId);
        return products.find((product) => product.id == itemId);
    }

    return (
        <div className="shopping-cart">
            <div className={cartOpen}>
                <div className="cart-product-name">
                    <h3>Shopping Cart
                        <span className="button">
                            <i className="material-icons md-48">add_shopping_cart</i>
                        </span>
                    </h3>
                </div>

                <div className="CartTable">
                    <div className="header">
                        <div className="header-row">
                            <span className="flex-2">Name</span>
                            <span className="center">Quantity</span>
                            <span className="center">Unit Price</span>
                            <span className="center">Cost</span>
                        </div>
                        {shoppingCart.length > 0 && shoppingCart.map((shoppingItem) => {
                            const prod = getProduct(shoppingItem.itemId);
                            const productSubTotal = calculateSubTotal(prod.price, shoppingItem?.quantity);
                            console.log(productSubTotal);
                            subtotal += productSubTotal;
                            return (
                                <ProductRow productName={prod.name}
                                    productPrice={prod.price}
                                    productQuantity={shoppingItem?.quantity}
                                    productSubtotal={productSubTotal} />
                            )
                        }
                        )}
                    </div>

                    <div className="receipt">
                        <div className="receipt-subtotal">
                            <span className="label">Subtotal</span>
                            <span className="center subtotal">{subtotal}</span>
                        </div>
                        <div className="receipt-taxes">
                            <span className="label">Taxes and Fees</span>
                            <span className="center">{Math.round(calculateTaxes(subtotal) * 100) / 100}</span>
                        </div>
                        <div className="receipt-total">
                            <span className="label">Total</span>
                            <span className="center total-price">{Math.round(calculateOrderTotal(subtotal) * 100) / 100}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export function ProductRow({ productName, productPrice, productQuantity, productSubtotal }) {
    console.log(`productName: ${productName}`);
    return (
        <div className="product-row">
            <span className="flex-2 cart-product-name">{productName}</span>
            <span className="center cart-product-quantity">{productQuantity}</span>
            <span className="center cart-product-price">{productPrice}</span>
            <span className="center cart-product-subTotal">{productSubtotal}</span>
        </div>
    )
}
