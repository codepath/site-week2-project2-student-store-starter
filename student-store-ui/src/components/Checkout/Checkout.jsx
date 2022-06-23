export default function Checkout({ shoppingCart, purchase, name,email,isOpen ,checked}) {
  //{ name, email, purchase, subtotal,taxes}
    
    purchase.map((item) => {
        console.log(item)
    })

  console.log("Checkout", purchase);
    return (
        
      
        <div>
            {isOpen && name && email && checked ?
                <div className="receipts-card">
                    <div className="receipts">
                        <h2>Receipt</h2>
                    </div>

                    <div className="title-name">
                        Showing Receipt for {name} @ {email}
                    </div>
                    <div>
                        <ul>
                            {purchase.map((item) => {
                                return <li>
                                    {item.quantity} total {item.name} purchased at a cost of $
                                    {item.price}.
                                </li>;
                            })}
                        </ul>
                    </div>

                    <button>Show More</button>
                    <button>Exit</button>
                </div>
            
                : ""}
     
    </div>
  );
}
