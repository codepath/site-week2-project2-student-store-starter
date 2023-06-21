import * as React from "react";
import "./ProductGrid.css";
import { useState } from "react";

export default function ProductGrid({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [searchText, setSearchText] = useState("");

  function search(category, text) {
    if (text.trim === "") {
      for (let item in products) {
        if (
          item.category.trim().toLowerCase() === category.trim().toLowerCase()
        ) {
          createProduct(item);
        }
      }
    } else {
      for (let item in products) {
        if (
          item.category === category &&
          item.name.trim().toLowerCase().includes(text.trim().toLowerCase())
        ) {
          createProduct(item);
        }
      }
    }
  }

  // function search(category, query) {

  //     if (query is empty){
  //         for (item in products){
  //             if (product.category == category){
  //                 createProduct(item)
  //             }
  //         }
  //     }

  //     else {
  //         for (item in products){
  //             if(item.category == category && query is a substring of item.name){
  //                 createProduct(item)
  //             }
  //     }

  // }

  function createProduct(info) {
    return (
      <section className="products-grid">
        <div className="product-card">
          <div className="product-img">
            <img src={info.image} />
          </div>
          <div className="product-info">
            <p>{info.name}</p>
            <p>{info.price}</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <div className="prodgrid">
      {products?.map((product) => createProduct(product))}
    </div>
  );
}
