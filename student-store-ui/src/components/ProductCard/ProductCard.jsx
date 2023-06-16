import "./ProductCard.css"

export default function ProductCard({product}) {
  return (
    <div className="product-card">
      <img src={product.image}/>
      <div className="info-box">
        <b>{product.name}</b><br/>
        ${product.price.toFixed(2)}
      </div>
    </div>
  )
}
