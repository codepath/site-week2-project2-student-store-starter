import ProductCard from "../ProductCard/ProductCard";
import './ProductGrid.css'
import * as React from 'react'


export default function ProductGrid({ products,handleRemoveItemFromCart, handleAddItemToCart, shoppingCart,setshoppingCart ,quantity,setQuantity}) {

  
  
  
  function showproducts() {
    if (products != null) {
      {
        return products.map((product) => (
          
          <ProductCard
            product={product}
            productId={product.id}
            shoppingCart={shoppingCart}
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            setshoppingCart={setshoppingCart}
            showDescription={false}
            key={product.id}
          />
        ));
      }
    }
  }
  return <div className="product-grid">{showproducts()}</div>;
}
