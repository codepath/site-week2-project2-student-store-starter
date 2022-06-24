import ProductView from '../ProductView/ProductView';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { useState, useEffect } from "react";
import axios from '../../../api/axios';

export default function ProductDetail({
    handleAddItemToCart, shoppingCart, handleRemoveItemFromCart
}) {
    // when using useParams you must match the destructure
    const { productId } = useParams();

    const [isFetching, setIsFetching] = useState(false);
    const [product, setProduct] = useState('');
    const [error, setError] = useState("");

    useEffect(async () => {
        setIsFetching(true);
        await axios.get(`/store/${productId}`)
            .then((res) => {
                setIsFetching(false);
                setProduct(res.data.product);
                //
            })
            .catch((err) => {
                setError("Failed to fetch data.");
            });
            //
    }, []);

    // filter will return an array even if there is only one object
    //const findProduct = allProducts.filter((prod) => prod.id == productId);
    return (
        <div className="product-detail">
            {isFetching ? (
                <h1 className="loading">Loading...</h1>
            ) : (
                <>
                    {!isFetching && error == "" ? (
                        <ProductView product={product}
                            productId={productId}
                            handleAddItemToCart={handleAddItemToCart}
                            handleRemoveItemFromCart={handleRemoveItemFromCart}
                            shoppingCart={shoppingCart} />
                    ) : (
                        error != "" && <NotFound />
                    )}
                </>
            )}
        </div>
    );
}
