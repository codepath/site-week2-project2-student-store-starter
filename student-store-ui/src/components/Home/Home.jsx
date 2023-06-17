import * as React from "react"
import "./Home.css"
import Hero from '../Hero/Hero'
import SubnavBar from "../SubnavBar/SubnavBar"
import About from "../About/About"
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ProductGrid from '../ProductGrid/ProductGrid'

// export default function Home({products, formData, handleSearch, handleCategoryFilter, handleSubmit, quantity}) {
  export default function Home({products, formData, handleSearch, handleCategoryFilter}) {
    // export default function Home({products, formData, handleInput}) {
      return (

    // <SubnavBar/>

    <div className="home">
      <Hero />
      <SubnavBar formData={formData} handleSearch={handleSearch} handleCategoryFilter={handleCategoryFilter} />

      <ProductGrid products = {products} />
      <About />
      <Contact />
      <Footer />


   </div>
  )
}