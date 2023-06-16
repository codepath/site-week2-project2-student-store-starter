import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";


export default function Home({ products, searchTerm, category }) {



  return (
    <div className="home">
      <div className="product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <ProductGrid products={products} searchTerm={searchTerm} category={category} />


          {/* <div className="grid">
            <div className="product-card"> */}
              {/* {products.map((product) => createProduct(product))}{" "} */}
              {/* {products.map((product) => {
                return (
                  <div className="product-container" key={product.id}>
                    <img className="test" src={product.image} />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>

    

  );
}
