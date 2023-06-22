import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then(response => {
        console.log(response.data.product);
        setProduct(response.data.product);
      });
  }, []);

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="product-detail" key={id}>
        <div className="product-container">
        <h1>{product?.name}</h1>
          <div className="product-image">
            <img
              src={product?.image}
              alt={product?.name}
              style={{ width: "50%" }}
            />
          </div>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;