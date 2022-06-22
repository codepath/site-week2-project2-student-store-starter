import ProductCard from "../ProductCard/ProductCard";
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

export default function ProductDetails({ allProducts, handleAddItemToCart, shoppingCart, handleRemoveItemFromCart, showDescription }) {
    //when using useParams you must match the destructure
    const { productId } = useParams();

    //filter will return an array even if there is only one object
    const findProduct = allProducts.filter((prod) => {
        return prod.id == productId;
    });


    return (
        <div className="product-detail">
            <div className="product-view">
                <h1 className="product-id">{`Product #${productId}`}</h1>
                <div className="product-view-card">
                    <ProductCard product={findProduct[0]} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} showDescription={showDescription}/>
                    {/* <ProductDetailsCard product={findProduct[0]} /> */}
                </div>
            </div>
        </div>
    )
}