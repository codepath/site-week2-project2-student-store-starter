import * as React from 'react';
import './ProductDetail.css';
import ProductView from '../ProductView/ProductView';
import NotFound from '../NotFound/NotFound';

export default function ProductDetail() {
  function productIDisValid() {
    return true;
  }

  return (
    <div className="productDetail">
      {productIDisValid() ? <ProductView /> : <NotFound />}
    </div>
  );
}
