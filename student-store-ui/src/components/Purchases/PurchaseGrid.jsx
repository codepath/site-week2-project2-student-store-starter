import * as React from 'react';
import './Purchases.css';
import { useEffect } from 'react';
import axios from 'axios';
import PurchaseCard from './PurchaseCard';

export default function PurchaseGrid({ purchases, isFetching, error, updatePurchases }) {
  const URL_PURCHASES = 'http://localhost:3001/purchases';

  useEffect(() => {
    async function fetchPurchaseData() {
      await axios(URL_PURCHASES).then(({ data }) => {
        if (data.purchases) {
          updatePurchases(data.purchases);
        }
      });
    }
    fetchPurchaseData();
  }, []);
  return (
    <div className="purchases">
      <div className="purchase-grid">
        {isFetching ? <p>Fetching orders...</p> : null}
        {purchases.length === 0
          ? (
            <div className="error">
              {error}
              No orders have been made yet.
            </div>
          ) : null}
        {

        purchases.map((purchase) => (
          <PurchaseCard purchase={purchase} key={purchase.id} />
        ))

    }
      </div>
    </div>

  );
}
