import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then(response => {
        setProduct(response.data);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      
    </div>
  );
}

export default ProductDetails;