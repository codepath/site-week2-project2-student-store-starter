import * as React from "react"
import "./ProductGrid.css"

export default function ProductGrid(props){
    const newProducts = props.products?.filter((product) =>
    product.name.toLowerCase().includes(props.searchValue.toLowerCase())
  );

  return (
    <div className="home">
      <div className="product-grid">
        {newProducts?.length === 0 ? (
          <p className="grid-p">No products available 🛑</p>
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