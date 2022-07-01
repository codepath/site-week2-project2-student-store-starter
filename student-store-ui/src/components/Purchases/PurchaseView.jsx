import * as React from 'react';
import './Purchases.css';

export default function PurchaseView({ purchase, products }) {
  return (
    <div className="purchase-view">
      <div className="purchase-id">
        Order ID:
        {' '}
        {purchase.id}
      </div>

      <div className="purchase-name">
        Name:
        {' '}
        {purchase.name}
      </div>

      <div className="purchase-email">
        Email:
        {' '}
        {purchase.email}
      </div>

      <div className="purchase-total">
        Total cost $
        {purchase.total}
      </div>
      {purchase.order.map((item) => {
        const product = products.find((p) => (item.id === p.productId));

        const totalProductPrice = item.quantity * product.price;

        return (
          <div>
            {item.quantity}
            {' '}
            total
            {' '}
            {product.name}
            {' '}
            purchased at a cost of $
            {product.price}
            {' '}
            for a total cost of $
            {totalProductPrice}
            .
          </div>
        );
      })}
    </div>
  );
}
