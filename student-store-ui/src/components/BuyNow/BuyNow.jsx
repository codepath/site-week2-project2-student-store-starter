import React, { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Categories from "../Categories/Categories";
import ProductCard from "../ProductCard/ProductCard";
import './BuyNow.css'

function BuyNow({ products }) {
  const [productsInCategory, setProductsInCategory] = useState(products);
  const [productsSearched, setProductsSearched] = useState( products);

  function updateCategory(e) {
    const newCategory = e.target.value;
    // setCategory(() => newCategory);

    const newProducts=  products.filter((product) => product.category === newCategory)
    setProductsInCategory(newProducts)
  }

  function handleSearchProduct(e) {
    const searchTerm = e.target.value;
    const newProducts = productsInCategory.filter((product) => {
      const prodName = product.name;
      return prodName.includes(searchTerm);
    });
    console.log(newProducts, searchTerm)
    setProductsSearched(newProducts)
  }

  function handleSubmit(e){
    e.preventDefault()
    setProductsSearched(products)
  }

  return (
    <div className="buy-now">
      <form onSubmit={handleSubmit}>
        <label htmlFor="product"> search for item: </label>
        <input
          type="text"
          name="product"
          onChange={handleSearchProduct}
          value={productsSearched.name}
        />
        <br /> <br />
        <button onClick={handleSubmit}> Submit </button>
      </form>
      <Categories handleClick={updateCategory} />
      {/* need to put product grid and product view in a router */}
      <ProductGrid products={productsSearched}/>
    </div>
  );
}

export default BuyNow;
