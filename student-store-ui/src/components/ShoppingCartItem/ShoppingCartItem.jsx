import "./ShoppingCartItem.css"

export default function ShoppingCartItem(props) {
    return (
        <tr className="cart-table-column">
            <td className="cart-table-row cart-product-name">{props.item.name}</td>
            <td className="cart-table-row cart-product-quantity">{props.quantity}</td>
            <td className="cart-table-row cart-product-price">${props.item.price.toFixed(2)}</td>
            <td className="cart-table-row cart-product-subtotal">${(props.quantity * props.item.price).toFixed(2)}</td>
        </tr>
    )
}