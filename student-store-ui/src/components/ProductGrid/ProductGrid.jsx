import ProductCard from "../ProductCard/ProductCard";
import './ProductGrid.css'
import * as React from 'react'
import NotFound from "../NotFound/NotFound";


export default function ProductGrid({ products, handleRemoveItemFromCart, handleAddItemToCart, shoppingCart, setshoppingCart, quantity, setQuantity }) {

  console.log("Product-Grid", products)
  
  
  function showproducts() {
    if (products.length>0) {
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
  
  return (
    <div>
      {products.length > 0 ?
        < div id="buy" className="product-grid" > {showproducts()}</ div> :
        
        <NotFound />

      }
    
    </div>
   
    
    ) 
}
