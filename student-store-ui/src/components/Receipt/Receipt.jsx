import './Receipt.css'

export default function Receipt({ clicked, purchase,setshoppingCart ,submit}) {
    console.log("Receipt" ,purchase)
    var subtotal=0

    for (var i = 0; i < purchase.length; i++)
    {
        subtotal = subtotal + (purchase[i].quantity* purchase[i].price)
    }
    var tax = ((8.75) / 100) * subtotal
    
  var total = subtotal + tax

  return (
    <div className="CartTable">
      <table>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Cost</th>
        </tr>
        {purchase.map((val, key) => {
          return (
            <tr key={key}>
              <td className='cart-product-name'>{val.name}</td>
              <td>{val.price}</td>
              <td className='cart-product-quantity'>{val.quantity}</td>
              <td>{val.quantity * val.price}</td>
            </tr>
          )
        })}
      </table>
      <div className="receipt">
        <div className="receipt-subtotal">
          <span className="label">Subtotal</span>
          <span></span>
          <span></span>
                  <span className="center subtotal">${subtotal.toFixed(2)}</span>
        </div>
        <div className="receipt-taxes">
          <span className="label">Taxes and Fees</span>
          <span></span>
          <span></span>
          <span className="center">${tax.toFixed(2)}</span>
        </div>
        <div className="receipt-total">
          <span className="label">Total</span>
          <span></span>
          <span></span>
          <span className="center total-price">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
