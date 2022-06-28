export default function Checkout({ lastReceipt, products }) {
  console.log("lastReceipt", lastReceipt);
  console.log(products);

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


  
  return (
    <div>
      <div className="receipts-card">
        <div className="receipts">
          <h2>Receipt</h2>
        </div>

        <div className="title-name">
          Showing Receipt for {" "} {lastReceipt.purchase.user.name} {" "}
          available at  {" "} {lastReceipt.purchase.user.email} :
        </div>
        <ul>
          {products.map((product) => {
            return(
            lastReceipt.purchase.shoppingCart.map((item) => {
              if (product.id === item.itemId)
              {
                return <li>{item.quantity} total of  {" "} {product.name} {" "} purchased at a cost of {formatter.format( product.price)} { " "} for a total cost of {formatter.format( item.quantity*product.price)}</li>
              }
            })
            )
        
      })}
        </ul>

        <button>Show More</button>
        <button>Exit</button>
      </div>
    </div>
  );
}
