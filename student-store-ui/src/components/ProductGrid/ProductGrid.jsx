import * as React from 'react'
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
	let productsToShow = {};
	//check what category does the user want to see
	if (props.category === "all") {
		productsToShow = props.products;
	} else {
		productsToShow = props.products.filter(product => {
			return product.category === props.category;
		})
	}
	// if there is a query, pick up the products the user wants to see and run another filter
	if (props.searchQuery !== '') {
		productsToShow = productsToShow.filter(product => {
			return product.name.toLowerCase().includes(props.searchQuery.toLowerCase());
		})
	}

	return (
		<div id="buy-now" className="product-grid">
			<div className="product-grid container">
				{props.isFetching ?
					<h1>Loading...</h1>
					:
					productsToShow.map((e, i) => {
						return <ProductCard 
									key={e.name} 
									class="product-card" 
									product={e} 
									shoppingCart={props.shoppingCart} 
									setShoppingCart={props.setShoppingCart}
									handleAddItemToCart={props.handleAddItemToCart}
									handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
					})}
			</div>
		</div>)
}