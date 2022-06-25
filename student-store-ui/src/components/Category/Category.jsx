import * as React from 'react'
import './Category.css'

export default function Category({ name, setActiveCategory, activeCategory, setProducts, allProducts }) {
    return (
        <a onClick={() => {
            setActiveCategory(name)
            if (activeCategory != 'All categories') {
                setProducts(allProducts.filter((product) => product.category === activeCategory.toLowerCase()))
            } else {
                setProducts(allProducts)
            }
        } }><span>{ name }</span></a>
    )
}