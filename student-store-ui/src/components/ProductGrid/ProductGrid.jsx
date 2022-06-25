import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

// Props = products, handleadditemtocart, handleremoveitemfromcart, selectedProductId, setSelectedProductId
export default function ProductGrid(props) {

  let isTrue = true; // test

  //let index = props.shoppingCart.findIndex(el => el.id == productId)
  //props.shoppingCart[index].quantity 

  

  return (
    <section className="product-grid">
        <div className="content">

            <h1>Top Selling Products</h1>
            <div className="grid">
                {props.products.map((product) => (
                    
                   ( product.name.toLowerCase().includes(props.searchFormContent.toLowerCase()) ) && (props.selectedCategory == "all" || product.category == props.selectedCategory)  ? <ProductCard 
                    key={product.id} 
                    product={product} 
                    productId={product.id} 
                    productName={product.name}
                    category={product.category}
                    handleAddItemToCart={props.handleAddItemToCart}
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                    selectedProductId={props.selectedProductId}
                    setSelectedProductId={props.setSelectedProductId}
                    showDescription={false} 
                    shoppingCart={props.shoppingCart} /> : <></> 
                  

                ))}

                  {/*props.products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      productId={product.id} 
                      productName={product.name}
                      quantity={0}
                      handleAddItemToCart={props.handleAddItemToCart}
                      handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                      showDescription={false} />
                  ))*/}

                
            </div>

        </div>

    </section>
  )
}
