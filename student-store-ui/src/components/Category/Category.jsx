import * as React from 'react'
import './Category.css'

export default function Category({ name, setProducts, allProducts }) {
    return (
        <a className='category' onClick={() => {
            if (name != 'All categories') {
                setProducts(allProducts.filter((product) => product.category === name.toLowerCase()))
            } else {
                setProducts(allProducts)
            }
        } }>{ name }</a>
    )
}