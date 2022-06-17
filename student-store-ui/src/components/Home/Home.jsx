import * as React from "react"
import "./Home.css"
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import Search from "../Search/Search"
import {useState} from "react"
import CategoryNav from "../CategoryNav/CategoryNav"

export default function Home(props) {
  console.log("What's being passed in", props.products)
  const allProducts = props.products;
  var leng = true;

  const [currentProduct, setCurrentProduct] = useState("")
  const [categoryBtn, setCategoryBtn] = useState(false)

  let handleOnSearchChange = (event) => {
    console.log(event.target.value)
    props.setSearchTerm(event.target.value) 
    setCurrentProduct(props.products.filter( product => {
      return (product.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
    }))
  }
  let handleCategoryChange = (categoryName) => {
    setCategoryBtn(true)
    if(categoryName == "") {
      setCurrentProduct(props.products)
    } else {
      setCurrentProduct(props.products.filter( product => {
      return (product.category == categoryName)
    }))
    }

    
  }
  
  
  return (
    <div className="home">
     
      <Search handleOnSearchChange={handleOnSearchChange} setSearchTerm={props.function}/>
      <br></br>
      <CategoryNav handleCategoryChange={handleCategoryChange}/>
      <ProductsGrid products={props.searchTerm.length == 0 && categoryBtn == false ? props.products : currentProduct}/>
    
      
    </div>
  )
  
}
