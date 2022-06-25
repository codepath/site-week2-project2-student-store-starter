import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {

//   const getQuantity = () =>{
//     {props.products.map((product) => {
//         quantity = quantity ? quantity.quantity : 0
//     })
//     }
//     getQuantity=quantity
// }

  let displayProducts ={};

  //console.log(props.products)
  //console.log(props.isCategory)
    if(props.isCategory == "all" ){
      displayProducts = props.products;
    }else{
      displayProducts = props.products.filter(product => {
        return product.category == props.isCategory;
      })
    }
    
    if(props.search !== ''){
      displayProducts = displayProducts.filter(product =>{
        return product.name.toLowerCase().includes(props.search.toLowerCase());
      })
    }

   console.log("ProductGRid", props.handleRemoveItemtoCart)
    return (
    <div className="product-grid">
      <div className="content">
      <div className="grid">
        {displayProducts.map((product) => (
        // <p key={index}>{product.name}</p>
        
        <ProductCard  key={product.id} showDescription={false} product={product} productId={product.id} quantity={props.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart} shoppingCart={props.shoppingCart} />
        
      ))}
      {/* </div> */}
      </div>
      </div>
    </div>
  )
}
