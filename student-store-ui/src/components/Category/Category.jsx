import * as React from 'react'
import './Category.css'

export default function Category({ name, setActiveCategory, activeCategory, setProducts, products, allProducts }) {
    return (
        <a onClick={() => {
            setActiveCategory(name)
            // console.log(activeCategory)
            if (activeCategory != 'All categories') {
                setProducts(allProducts.filter((product) => product.category === activeCategory.toLowerCase()))
            } else {
                setProducts(allProducts)
            }
            // console.log(allProducts)
        } }><span>{ name }</span></a>
    )
}