import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";

// Props = products, selectedProductId
export default function ProductDetail(props) {

  const { productId } = useParams();

  const product = props.products.find(product => {
    return product.id == productId;
  });

  // let product = this.props.products.find(product => (product.id == this.props.match.params.id))


  return (
    <div className="product-detail">
      <div className="product-info">
        <h1 className="product-id">
          Product # {productId}
        </h1>
        <div className="product-card">
          <div className="media">
            <img src={product.image} alt="product cover" loading="lazy"/>
          </div>

          <div className="product-info">
            <div className="main-info">
              <p className="product-name">{product.name}</p>
              <div className="stars">
                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none">
                  <path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path>
                </svg>
                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none">
                  <path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path>
                </svg>
                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none">
                  <path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path>
                </svg>
                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none">
                  <path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path>
                </svg>
                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none">
                  <path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path>
                </svg>
              </div>
              <p className="product-price">${product.price}</p>
            </div>
            <div className="desc">
              <p class="product-description">{product.description}</p>
            </div>
            <div className="actions"></div>
          </div>

        </div>
        
      </div>
    </div>
  )
}
