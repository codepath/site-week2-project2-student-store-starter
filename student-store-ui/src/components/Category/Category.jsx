import * as React from 'react'
import './Category.css'

export default function Category({ name, setProducts, allProducts, activeCategory, setActiveCategory }) {
    return (
        <a className={'category ' + ((activeCategory === name) ? 'active':'') } onClick={() => {
            if (name != 'All categories') {
                setProducts(allProducts.filter((product) => product.category === name.toLowerCase()))
                setActiveCategory(name)
            } else {
                setProducts(allProducts)
                setActiveCategory('All categories')
            }
        } } href="#">{ name }</a>
    )
}