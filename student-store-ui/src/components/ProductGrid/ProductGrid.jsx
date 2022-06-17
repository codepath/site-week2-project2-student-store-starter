import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

// Props = products, handleadditemtocart, handleremoveitemfromcart
export default function ProductGrid(props) {
  return (
    <section className="product-grid">
        <div className="content">

            <h1>Top Selling Products</h1>
            <div className="grid">
                {/*props.products.map((product) => (
                  
                  { product.name.includes(props.searchFormContent)  ? <ProductCard 
                    key={product.id} 
                    product={product} 
                    productId={product.id} 
                    productName={product.name}
                    quantity={0}
                    handleAddItemToCart={props.handleAddItemToCart}
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                    showDescription={false} /> : <></> 
                  } 

                ))*/}

                  {props.products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      productId={product.id} 
                      productName={product.name}
                      quantity={0}
                      handleAddItemToCart={props.handleAddItemToCart}
                      handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                      showDescription={false} />
                ))}

                
            </div>

        </div>

    </section>
  )
}
