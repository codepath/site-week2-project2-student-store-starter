import react from "react";
import { Link } from "react-router-dom";
import "./Productcontainer.css"

//Default function that takes in a prop productFilter
export default function Productgrid({ productFilter, ShoppingList, SetShoppingList }) {
    function addToCart(product){

        const exists = ShoppingList?.find(item => product.id === item.id)
        
        if(exists){
            const updatedList = ShoppingList.map((item)=>{
                if(item.id === product.id){
                   return {...product, quantity: item.quantity + 1}
                }
                return item
            })
            SetShoppingList(updatedList)
        }else{
            SetShoppingList([...ShoppingList, {...product, quantity: 1}])
        }
        console.log(ShoppingList)
    }

    function removeFromCart(product){
        const updatedList = ShoppingList.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
      
        const filteredList = updatedList.filter((item) => item.quantity > 0)
      
        SetShoppingList(filteredList)
        console.log(ShoppingList)
      }

    return(
        //Container/Grid to display the products
        <div className="product-container">
            {
                productFilter?.map(product => {
                    return(
                    <div className="product">
                        <Link className="link" to={"products/" + product.id}>
                            <img src = {product.image}/>
                        </Link>
                    <p>{product.name}</p>
                    <p>{"$"}{product.price.toFixed(2)}</p>
                    <div>
                        <button onClick={() => addToCart(product)}>+</button>
                        <button onClick={() => removeFromCart(product)}>-</button>
                    </div>
                    </div>)
                })
            }
        </div>
    )
}
