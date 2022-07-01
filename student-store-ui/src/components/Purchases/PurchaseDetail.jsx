import * as React from 'react';
import './Purchases.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from '../NotFound/NotFound';
import PurchaseView from './PurchaseView';

export default function PurchaseDetail({ products }) {
  const [purchase, updatePurchase] = useState({});
  const [isLoading, updateIsLoading] = useState(false);
  console.log(useParams());
  const { purchaseId } = useParams();
  
  const URL = 'http://localhost:3001/purchases/';

  useEffect(() => {
    async function fetchData() {
      updateIsLoading(true);

      await axios(URL + purchaseId).then(({ data }) => {
        if (data.purchase) {
          updatePurchase(data.purchase);
        }
      });
      updateIsLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div className="purchase-detail">
      {isLoading ? <p>Loading...</p>
        : purchaseId == purchase.id ? <PurchaseView purchase={purchase} products={products} />
          : <NotFound />}
    </div>
  );
}
