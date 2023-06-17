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
  const [currentCategory, currentCategorySet] =  React.useState("")

  // Event Handlers / Click and KeyUp

  function handleSearchBar(e) {
    const searchInput = e.target.value.toLowerCase()
    const newFilteredItemList = itemList.filter(item => item.name.toLowerCase().includes(searchInput) && item.category.includes(currentCategory))
    console.log(newFilteredItemList)
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
        currentItemSet(response.data.products[parseInt(window.location.pathname.split("/").pop()) - 1])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // Components => Home, Item, and NotFound Page

  function Home() {
    return (
      <div className="home">
        <div className="hero">
          <h1 id="hero-pic-header-1">cool epic skating cat store</h1>
          <h2 id="hero-pic-header-2">cool epic description of skating cat store</h2>
          <img src={homePic} id="hero-pic"/>
        </div>
        <div className="search-bar-section">
          <input type="text" id="search-bar" placeholder="Search" onChange={handleSearchBar}/>
        </div>
        <div className="display-categories">
          {
            categories.map((category) => {
              return <button type="submit" className="category-buttons" name={category} onClick={handleCategory}>{category}</button>
            })
          }
        </div>
        <div id="item-grid">
        {
            (displayedItemList) ? 
            displayedItemList.map((item) => {
              return (
                <div className="item" key={item.id}> 
                  <div className="innerItem">
                    <Link to={"/item/" + item.id}>
                      <img className= "item-image" src={item.image} style={{"width": "250px", "height": "250px"}} onClick={() => currentItemSet(item)}/>
                    </Link>
                    <h3 className="item-text">{item.name}</h3>
                    <h3 className="item-text">${item.price}</h3>
                  </div>
                </div>
              )
            })
            :
            <h1>Loading...</h1>
        }
        </div>
        <div id="about-section">
          <img id="about-pic" src={homePic}/>
          <h1>{"about the cool epic skating cat !!"}</h1>
          <h3>{"this cool cat has its own store and merch and has decided to set his foot into the full-stack webdev world !"}</h3>
          <h3>{"as you can see, his endeavors have been [questionably] successful and have blossomed into fruition (making a lot of money)."}</h3>
          <h3>{"he additionally hopes that you join his \"epic membership cool cat skating premium club\" for exclusive deals and offers for only $19.99 a month!"}</h3>
          <h3>{"he hopes you had a wonderful visit to his website and hopes you return soon enough !!!"}</h3>
          <h3>{"(side note: website made by his extremely underpaid human react developer [who will never be as cool as he is])"}</h3>
        </div>
        <div id="footer">
          <h1 className="footer-text">contact the cool epic skating cat !</h1>
          <h2 className="footer-text">phone: skate-cat-epic-999</h2>
          <h2 className="footer-text">email: theepicskatingcat@cool.com</h2>
        </div>
      </div>
    )
  }

  function ItemPage(item) {
    return (
      <div className="item-page">
        <h1>Product #{item?.id} : {item?.name}</h1>
        <img className= "item-image" src={item?.image} style={{"width": "1000px", "height": "1000px"}}/>
        <h3>{item?.description}</h3>
        <h3>${item?.price} USD</h3>
      </div>
    )
  }

  function NotFound() {
    return (
      <div className="not-found">
        <h1>skating cat did not find the page you were looking for !!!</h1>
        <h1>{"try a cooler \"window.location.pathname\" !!! (preferrably \"/item/x\" where 1≤x≤16 and x∈N)"}</h1>
        <img src={homePic} />
      </div>
    )
  }

  // Returning Component

  return (
    <Routes>
      <Route path="/" element={Home()}/>
      <Route path={"/item/" + currentItem?.id} element={ItemPage(currentItem)}/>
      <Route path={"*"} element={NotFound()}/>
    </Routes>
  )
}