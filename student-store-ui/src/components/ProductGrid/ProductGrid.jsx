import ProductCard from "../ProductCard/ProductCard";
import './ProductGrid.css'

export default function ProductGrid({ products }) {

  let new_array = [...products]
  
  function showproducts() {
    if (products != null) {
      {
        return products.map((product) => (
          <ProductCard
            product={product}
            productId={product.id}
            quantity={0}
            handleAddItemToCart={null}
            showDescription={false}
            key={product.id}
          />
        ));
      }
    }
  }
  return <div className="product-grid">{showproducts()}</div>;
}
