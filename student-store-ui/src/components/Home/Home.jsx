import * as React from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import "./Home.css"
import homePic from "./heropic.jpeg"

export default function Home() {

  // Const Variables and States

  const categories = ["all categories", "food", "clothing", "accessories", "tech"]

  const [itemList, itemListSet] = React.useState(null)
  const [displayedItemList, displayedItemListSet] = React.useState(null)
  
  const [currentItem, currentItemSet] = React.useState(null)
  const [currentCategory, currentCategorySet] =  React.useState(null)

  // Event Handlers / Click and KeyUp

  function handleSearchBar(e) {
    const searchInput = e.target.value.toLowerCase()
    const newFilteredItemList = itemList.filter(item => item.name.toLowerCase().includes(searchInput) && item.category.includes(currentCategory))
    displayedItemListSet(newFilteredItemList)
  }

  function handleCategory(e) {
    e.preventDefault()
    const filterCategory = (e.target.name == "all categories") ? "" : e.target.name
    const newFilteredItemList = itemList.filter(item => item.category.includes(filterCategory))
    currentCategorySet(filterCategory)
    displayedItemListSet(newFilteredItemList)
  }

  // API/Fetch and useEffect

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        itemListSet(response.data.products)
        displayedItemListSet(response.data.products)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // Components => Home and Item Page

  function Home() {
    return (
      <div className="home">
        <div className="hero">
          <h1 id="hero-pic-header-1">cool epic pic of skating cat</h1>
          <h2 id="hero-pic-header-2">cool epic description of skating cat</h2>
          <img src={homePic} id="hero-pic"/>
        </div>
        <div className="search-bar-section">
          <input type="text" id="search-bar" placeholder="Search" onChange={handleSearchBar}/>
        </div>
        <div className="display-categories">
          {
            categories.map((category) => {
              return <button type="submit" name={category} onClick={handleCategory}>{category}</button>
            })
          }
        </div>
        <div className="item-grid">
        {
            (displayedItemList) ? 
            displayedItemList.map((item) => {
              return (
                <div className="item" key={item.id}> 
                  <Link to={"/item" + item.id}>
                    <img className= "item-image" src={item.image} style={{"width": "250px", "height": "250px"}} onClick={() => currentItemSet(item)}/>
                  </Link>
                  <h3>{item.name}</h3>
                  <h3>${item.price}</h3>
                </div>
              )
            })
            :
            <h1>Loading...</h1>
        }
        </div>
        <div className="about-section">
          <img className="about-pic" src={homePic}/>
          <h1>webite</h1>
          <h3>cool webite that talks about a cat skating its skateboard</h3>
          <h3>even more cooler text that talks about skating and doing cool cat tricks</h3>
          <h3>wowwwww epic trick yes yes this is another paragraph about it</h3>
          <h3>wowwwww epic trick yes yes this is another paragraph about it</h3>
          <h3>wowwwww epic trick yes yes this is another paragraph about it</h3>
        </div>
        <div className="footer">
          <h3 className="footer-text">contact us or something</h3>
          <h3 className="footer-text">phone: hello-bye-cya-888</h3>
          <h3 className="footer-text">email: ialreadygaveup@gmail.com</h3>
        </div>
      </div>
    )
  }

  function ItemPage(item) {
    return (
      <div className="item-page">
        <h1>Product #{item?.id} : {item?.name}</h1>
        <img className= "item-image" src={item?.image}/>
        <h3>{item?.description}</h3>
        <h3>${item?.price} USD</h3>
      </div>
    )
  }

  // Returning Component

  return (
    <Routes>
      <Route path="/" element={Home()}/>
      <Route path={"/item" + currentItem?.id} element={ItemPage(currentItem)}/>
    </Routes>
  )
}