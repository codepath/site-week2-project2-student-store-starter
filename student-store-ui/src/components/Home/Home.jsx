import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Categories from "../Categories/Categories";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"


export default function Home({products}) {

  console.log(products);

  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState("all categories")

  function addItemtoCart(){

  }

  function createProduct(info) {
  const [quantity, setQuantity] =React.useState(0)

  return (
    <div className="product">
        <Link id="product-link" to={'products/' + info.id}>
      <div>
        <img src={info.image} />
        <p className="">{info.name}</p>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
        <p>${info.price.toFixed(2)}</p>
      </div>
    </Link>
    <button onClick={addItemtoCart}> - </button>
    <button onClick={RemoveItemfromCart}> + </button>
    </div>
    
  )
}

const searchedProducts = products?.filter((product) => {
  let searchWord = search.toLowerCase()
  let searchCategory = category.toLowerCase()

  let matchSearch = (searchWord == "") || (product.name.toLowerCase().includes(searchWord))
  let matchesCategory = (searchCategory == "all categories") || (searchCategory == product.category.toLowerCase())

  return matchSearch && matchesCategory
})

return (
  <div id={"home"} className= "home">
    {/* <div className="searchbar"> */}
    <Hero/>
      <form>
        <label> </label>
    <input type="text" value={search} onChange={(event)=>{setSearch(event.target.value)}}name="search" placeholder="🔎 Search" ></input>

      </form>
    {/* </div> */}

    <nav className="navbar">
      <ul>
        <li><a onClick={()=>setCategory("all categories")}>All Categories</a></li>
        <li><a onClick={()=>setCategory("clothing")}>Clothing</a></li>
        <li><a onClick={()=>setCategory("food")}>Food</a></li>
        <li><a onClick={()=>setCategory("accessories")}>Accessories</a></li>
      </ul>
    </nav>

    <div id={"buy"}className= "containers">  {
      searchedProducts?.map(product => createProduct(product))
    }</div>
    <div id={"about"}className= "containers">
    <div id={"contact"}className="containers"></div> 
    </div>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
  </div>
)
  }
