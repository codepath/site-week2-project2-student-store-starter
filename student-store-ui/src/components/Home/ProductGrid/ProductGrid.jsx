import * as React from "react";
import { Add, Remove } from "@mui/icons-material";
import products, { productCategories } from "../../../constants/products";
import "./ProductGrid.css";

const Stars = ({ id, rating }) => {
  const fullStars = Math.floor(rating);
  const partialStarsPct = (rating - fullStars) * 100;
  const size = 32;

  return (
    <p aria-label={`Rating is ${rating} out of 5`}>
      <svg style={{ width: 0, height: 0 }} viewBox={"0 0 576 512"} xmlns={"http://www.w3.org/2000/svg"}>
        <defs>
          <mask id={`lastStar`}>
            <rect x={0} y={0} width={576} height={512} fill={"white"} />
            <rect x={`${partialStarsPct}%`} y={0} width={576} height={512} fill={"black"} />
          </mask>
          <symbol viewBox={"0 0 576 512"} id={`${id}-star`}>
            {/*Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
            <path
              d={"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"}
            />
          </symbol>
        </defs>
      </svg>
      {(new Array(fullStars + 1).fill(0).map((_, i) => (
        <svg className="c-icon" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {i === fullStars ?
            <use href={`#${id}-star`} mask={`url(#lastStar)`} fill={"green"}></use> :
            <use href={`#${id}-star`} fill={"green"}></use>
          }
        </svg>
      )))}
    </p>
  );
};

const ProductCard = ({ id, img, label, rating, price, countInCart, setCountInCart }) => (
  <div className={"product-card"}>
    <img src={img} alt={label}/>
    <div className={"product-description"}>
      <div className={"title-and-count"}>
        <p>{label}</p>
        <div className={"cart-count"}>
          <button>
            <Add />
          </button>
          <input type={"number"} value={countInCart} placeholder={"0"}/>
          <button>
            <Remove/>
          </button>
        </div>
      </div>
      {/*<Stars id={id} rating={rating} />*/}
      <p className={"price"}>${price.toFixed(2)}</p>
    </div>
  </div>
);

const ProductGrid = ({ cartContents, setCartContents }) => {
  const setProductCartValue = (id, value) => setCartContents((prev) => ({ ...prev, [id]: value }));
  return (
    <div className={"product-grid"}>
      {products.map(({ id, ...product }) => (
        <ProductCard
          key={id}
          countInCart={cartContents[id]}
          setCountInCart={(value) => setProductCartValue(id, value)}
          id={id}
          {...product}
        />
      ))}
    </div>
  )
};

export default ProductGrid;