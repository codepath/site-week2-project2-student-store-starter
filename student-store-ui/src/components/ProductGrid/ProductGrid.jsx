import * as React from "react";
import "./ProductGrid.css";

export default function ProductGrid({products, searchTerm, category}) {

    function createProduct(info) {
      return (
        <>
          <div className="product">
            <img className="test" src={info.image} />
            <div>{info.name}</div>
            <div>{info.price}</div>
          </div>
        </>
      );
    }

    const filteredByCategory = products.filter((product) => {return product.category == category.toLowerCase()});

    const returnItems = category == "All Categories"? products : filteredByCategory;

    const searchFiltered = returnItems.filter((item) =>
    {return item.name.toLowerCase().includes(searchTerm.toLowerCase())})
    



  return (
    <div className="product-grid">
      {searchTerm == "" ? (returnItems.map((p) => createProduct(p))) : (searchFiltered.map((p) => createProduct(p)))}
    </div>



    // <nav className="productGrid">
    //   <div className="productGrid">
    //     <div className="productCard">
    //       <div className="productImage">{productList}</div>
    //       <div className="productName"></div>
    //       <div className="productRating"></div>
    //       <div className="productPrice"></div>
    //     </div>
    //   </div>
    // </nav>
  );
}
