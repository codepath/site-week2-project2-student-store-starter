import * as React from "react"
import "./Home.css"

export default function Home(props) {
  
  // console.log(products);

    //needs to be moved to ProductGrid
  const newProducts=props.products?.filter((product) =>
  product.name.toLowerCase().includes(props.searchValue.toLowerCase()));  
  
  
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
