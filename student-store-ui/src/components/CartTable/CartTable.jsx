import "./CartTable.css"

export default function CartTable(props) {
    return (
        <div>
            <table className="cart-table">
                <tr className="cart-table-column">
                    <th className="cart-table-row">Name</th>
                    <th className="cart-table-row">Quantity</th>
                    <th className="cart-table-row">Price</th>
                    <th className="cart-table-row">Total</th>
                </tr>
                {props.getShoppingCartItems()}
            </table>
            {/* <table className="cart-table">
                <tr className="cart-table-column">
                    <th className="cart-table-row"></th>
                    <th className="cart-table-row">Subtotal</th>
                    <th className="cart-table-row">Tax</th>
                    <th className="cart-table-row">Name</th>
                </tr>
            </table> */}
        </div>
    )
}