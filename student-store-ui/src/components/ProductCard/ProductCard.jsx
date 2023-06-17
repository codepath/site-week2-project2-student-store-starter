import React, {useState} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({product, showDescription}) {
    const [amount, setAmount] = useState(0)

    function handleAddItemToCart(){
        setAmount(amount => amount+=1)
    }

    function handleRemoveItemToCart() {
        setAmount(amount => amount-=1)
    }

    // const style= {}

    return (
        
            <div className='product-card'>
            {/* <div className="product-cont">  */}
                <Link to= {'/product/' + product.id}>
                <img className= 'prod-image' src={product.image}/> 
                <div className='prod-details'>
                    <p className="prod-name"> {product.name} </p>
                    <p className="prod-price"> {`$ ${product.price}`} </p>
                </div>
                
                </Link>

                <div className='amount-cont'>
                    <div className='buttons'>
                        <button onClick={handleAddItemToCart}> + </button>
                        <button onClick={handleRemoveItemToCart}> - </button>
                    </div>
                    <p className='amount'> Amount: {amount} </p>

                </div>
                
                {
                    showDescription && 

                    <div className='prod-description'>
                        {product.description}
                    </div> 

                }
        {/* </div> */}
                
            </div>
        
        
    )
}

export default ProductCard


