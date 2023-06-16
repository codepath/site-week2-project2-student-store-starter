import * as React from "react";
import "./Home.css";

export default function Home({ products }) {
  // function createProduct(info) {
  //   return (
  //     <>

  //   <div className= "product">
  //       <img className="test" src={info.image} />
  //       <div>{info.name}</div>
  //       <div>{info.price}</div>
  //      </div>
  //     </>
  //   );
  // }

  function createProductCard() {}
  return (
    <div className="home">
      {/* <p>Home</p> */}
      <div className="product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="grid">
            <div className="product-card">
              {/* {products.map((product) => createProduct(product))}{" "} */}
              {products.map((product) => {
                return (
                  <div className="product-container" key={product.id}>
                    <img className="test" src={product.image} />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

    

  );
}
