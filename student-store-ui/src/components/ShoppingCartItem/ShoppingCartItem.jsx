import "./ShoppingCartItem.css"

export default function ShoppingCartItem(props) {
    return (
        <tr className="cart-table-column">
            <td className="cart-table-row">{props.item.name}</td>
            <td className="cart-table-row">{props.item.count}</td>
            <td className="cart-table-row">${props.item.price.toFixed(2)}</td>
            <td className="cart-table-row">${(props.item.count * props.item.price).toFixed(2)}</td>
        </tr>
    )
}