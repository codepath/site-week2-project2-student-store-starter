import "./ProductDetailsCard.css"

export default function ProductDetailsCard({ product }) {
    return (
        <div className="ProductDetailsCard">
            <div className="media">
                {<img src={product.image} alt="product-cover" />}
            </div>
            <div className="product-info">
                <div className="main-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                </div>
                <div className="desc">
                    <p className="product-description">{product.description}</p>
                </div>
                <div className="actions">
                    <div className="buttons">
                        <i className="material-icons">
                            add
                        </i>
                        <i className="material-icons">
                            remove
                        </i>
                    </div>

                    <span className="quantity">
                        <span className="amt"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}