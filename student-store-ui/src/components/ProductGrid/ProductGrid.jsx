import * as React from 'react'
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
	let productsToShow = {};
	//check what category does the user want to see
	console.log("request grid:", props);
	if (props.category === "all") {
		productsToShow = props.products;
	} else { 
		productsToShow = props.products.filter(product => {
			return product.category === props.category;
		})
		console.log(productsToShow);
	}

	return (
		<div className="product-grid">
			{props.isLoading ?
				<h1>Loading...</h1>
				:
				productsToShow.map((e, i) => {
					return <ProductCard key={e.name} product={e} />
				})}

		</div>)
}