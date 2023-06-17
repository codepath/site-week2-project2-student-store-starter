import * as React from "react"
import "./ProductGrid.css"

export default function ProductGrid({products}) {

    // export default function Home({ products }) {
    //     const [searchTerm, setSearchTerm] = useState("");
    //     const [selectedCategory, setSelectedCategory] = useState("");
    //     const categories = [
    //       "All Categories",
    //       "Clothing",
    //       "Food",
    //       "Accessories",
    //       "Tech"
    //     ];
    //     const productFilter = products?.filter((product) => {
    //       const lowercaseSearchTerm = searchTerm.toLowerCase();
    //       const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    //       const productName = product.name.toLowerCase();
    //       const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    //       const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    //       return matchesSearch && matchesCategory;
    //     });


    function createProduct(info) {
        return (
          <section className="products-grid">
            <div className="product-card">
              <div className="product-img">
                <img src={info.image} />
              </div>
              <div className= "product-info">
                <p>{info.name}</p>
                <p>{info.price}</p>
              </div>
            </div>
          </section>
        )
      }
      return (
        <div className="prodgrid">
           {products?.map(product => createProduct(product))}
        </div>
      )
}
