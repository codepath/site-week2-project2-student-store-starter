import * as React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

export default function ProductGrid({products, searchTerm, category}) {

    function createProduct(info) {
      return (
        <>
          <div className="product">
            <Link to={"/products/" + info.id}>
            <img className="test" src={info.image} />
            </Link>
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
    <div className="">
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
