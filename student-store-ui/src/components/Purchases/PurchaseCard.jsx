import * as React from 'react';
import './Purchases.css';
import { Link } from 'react-router-dom';

export default function PurchaseCard({
  purchase,
}) {
  return (
    <div className="card purchase-card">

      {// TODO: Link to /purchases/purchaseId
      }

      <div className="card-content">

        <Link to={`/purchases/${purchase.id}`}>

          <div className="purchase-id">
            Order ID:
            {' '}
            {purchase.id}
          </div>
        </Link>

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

      </div>

    </div>

  );
}
