export default function ProductCard({ name, id, image, price }) {
  console.log(id);
  return (
    <section className="product">
      <img className="product-image" src={image} />
      <div className="main-info">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>{price}</b>
        </p>
      </div>
    </section>
  );
}
