export default function Checkout({ lastReceipt, setShoppingCart, purchase, name,email,isOpen ,clicked,submit}) {
  //{ name, email, purchase, subtotal,taxes}

    console.log(lastReceipt)



    var purchases = [...purchase]



    
    
    
    

    return (
        
      
        <div>
          
                <div className="receipts-card">
                    <div className="receipts">
                        <h2>Receipt</h2>
                    </div>

                    <div className="title-name">
                        Showing Receipt for 
                </div>
                 <ul>
                    {lastReceipt.order.shoppingCart.map(element => {
                            
                            <li>{element} </li>
                        })}
                </ul>
                
                    <div>
                   
                    </div>

                    <button>Show More</button>
                    <button>Exit</button>
                </div>
            
     
    </div>
  );
}
