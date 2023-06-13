import * as React from "react"
import "./Home.css"

export default function Home({products}) {
  // console.log(products);
  const num_in_cart=3;
  return (
    <div className="home">
      {/* <p>Home</p> */}
      <div id="Buy" className = "product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="grid">
            {products?.map((product, index) => {
            // have to put additional return bc => has implicit return
              return <div className="product-card" key={index} >
                <img src={product.image} ></img>
               
                <div className="product-info">
                  <div className="main-info">
                      <p className="product-name">{product.name}</p>
                      <div className="stars">
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        {/* <img src={"https://www.pngitem.com/pimgs/m/610-6107201_transparent-half-of-a-star-hd-png-download.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img> HALF STAR?? */} 
                        </div>
                      <p className="product-price">{"$"+product.price}</p>
                  </div>
                <div className="actions">
                  <div className="buttons">
                    <button className="add">
                      <i className="material-icons">add</i>
                    </button>
                    <button className="remove">
                      <i className="material-icons">remove</i>
                    </button>
                  </div>
                  <span className="quantity">
                    <span className="amt">{num_in_cart}</span>
                  </span>
                </div>

              </div>
               

            </div> })}
          </div>
        </div>
      </div>
    </div>
  )
}
