import * as React from "react";
import "./Home.css";

export default function Home(props) {
  const newProducts = props.products?.filter((product) =>
    product.name.toLowerCase().includes(props.searchValue)
  );

  return (
    <div className="home">
      <div className="productGrid">
        {newProducts?.length === 0 ? (
          <p>No products available.</p>
        ) : (
          newProducts?.map((product) => {
            return (
              <div className="product">
                <img
                  className="product-poster"
                  src={product.image}
                  alt={`Image of ${product.name}`}
                />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
