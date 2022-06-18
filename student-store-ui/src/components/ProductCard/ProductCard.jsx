import { Link } from "react-router-dom";
import "./ProductCard.css";
export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let linkAddress = "/products/" + productId;

  return (
    <div className="card">
      <div className="image-border">
        <Link to={linkAddress}>
          <img className="product-image" src={product.image} />
        </Link>
      </div>
      <div className="container">
        <h4 className="product-name">
          <b>{product.name}</b>
        </h4>
        <p> &#11088;&#11088;&#11088;&#11088;</p>
        <p></p>
              <p>{formatter.format(product.price)}</p>
                {!showDescription ? "": (
                  <h5>{product.description}</h5>
      )}
      </div>
    </div>
  );
}

export function AddButton({ handleOnSubmit, tweetText = "" }) {
  console.log(tweetText.length);
  var disableTweet = true;
  if (tweetText.length < 1) {
    disableTweet = true;
  } else if (tweetText.length > 140) {
    disableTweet = true;
  } else {
    disableTweet = false;
  }
}
