import * as React from "react"
import "./Home.css"

export default function Home(props) {
  
  // console.log(products);
  let newProducts;
    //needs to be moved to ProductGrid
  if (props.searchCatValue === 'search') {
    newProducts=props.products?.filter((product) =>
    product.name.toLowerCase().includes(props.searchValue.toLowerCase()));  
  }

else if (props.searchCatValue === 'category') {
    if (props.catValue === 'all') {
      newProducts=props.products
    }
   else {newProducts=props.products?.filter((product) =>
    product.category.toLowerCase().includes(props.catValue.toLowerCase()))}; 
}

else {
  newProducts=props.products
}


  // newProducts=props.products?.filter((product) =>
  // product.name.toLowerCase().includes(props.searchValue.toLowerCase()));  
  
  
  //needs to be moved to ProductGrid
  function createProduct(info) {
    return (
      <div className="product">
        <img src={info.image} />
        <p>{info.name}</p>
        <p>{info.price}</p>
        </div>
    )
  }
  
  return (
    <div className="home">
      {/* <Link to="/About">Click me to route</Link> */}
      <div className="productGrid">
      {
        newProducts?.map(product => createProduct(product))
      }
      </div>
     
    </div>
  )
}
