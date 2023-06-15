import React, {useState} from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

function Categories({handleClick}) {
    // const [category, setCategory] = useState('')

    // function updateCategory(e) {
    //     const newCategory = e.target.value
    //     setCategory(()=> newCategory)

    //     {products.filter((product)=> product.category===newCategory).map(product => 
    //     createProd(product))
    //     }
    //   }
    return (
        <nav className='categories'>
            <ul>
                <li><Link className='links' value='all' onClick={handleClick} to="/all"> All Categories </Link></li>
                <li><Link className='links' value= 'clothing' onClick={handleClick} to="/clothing"> Clothing </Link></li>
                <li><Link className='links' value= 'food' onClick={handleClick} to="/food"> Food </Link></li>
                <li><Link className='links' value= 'accessories' onClick={handleClick} to="/accessories"> Accessories </Link></li>
                <li><Link className='links' value= 'tech' onClick={handleClick} to="/tech"> Tech </Link></li>
            </ul>
        </nav>
    )
}

export default Categories
