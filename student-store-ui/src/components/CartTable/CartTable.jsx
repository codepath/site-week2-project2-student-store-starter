import React from "react";
import "./CartTable.css";

export default function CartTable({ shoppingCart, products, style }) {
    const findProduct = (id) => {
        let i = -1
        products.forEach((currProduct, idx) => {
            if(currProduct.id === id){i = idx}
        });
        return i;
    }

    const subtotal = (shoppingCart) => {
        return shoppingCart.reduce((subt, product) =>  subt + products[findProduct(product.itemId)]?.price * product?.quantity, 0)
    }
  return (
    <table className="checkoutTable" style={style}>
      <tr className="table-header">
        <th className="table-header-elements">Name</th>
        <th className="table-header-elements">Quantity</th>
        <th className="table-header-elements">Unit Price</th>
        <th className="table-header-elements">Cost</th>
      </tr>
      {shoppingCart?.map((product) =>
        (<tr>
            <td className="table-entry">{ products[findProduct(product.itemId)]?.name}</td>
            <td className="table-entry">{product?.quantity}</td>
            <td className="table-entry">{ `$${products[findProduct(product.itemId)]?.price.toFixed(2)}`}</td>
            <td className="table-entry">{ `$${products[findProduct(product.itemId)]?.price * product?.quantity}`}</td>
        </tr>
      ))}
      {<tr>
        <td>Subtotal</td>
        <td></td>
        <td></td>
        <td>{`$${subtotal(shoppingCart).toFixed(2)}`}</td>
        </tr>}
        <tr>
            <td> Taxes</td>
            <td></td>
            <td></td>
            <td>{`$${(subtotal(shoppingCart) * 8.75 / 100).toFixed(2)}`}</td>
        </tr>
        <tr>
            <td> Total</td>
            <td></td>
            <td></td>
            <td>{`$${(subtotal(shoppingCart) * 8.75 / 100 + subtotal(shoppingCart)).toFixed(2)}`}</td>
        </tr>
    </table>
  );
}
