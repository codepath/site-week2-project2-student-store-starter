export default function Checkout({ lastReceipt, setShoppingCart, purchase, name,email,isOpen ,clicked,submit}) {
  //{ name, email, purchase, subtotal,taxes}

    console.log("lastReceipt",lastReceipt)

    
    

    return (
        
      
        <div>
          
                <div className="receipts-card">
                    <div className="receipts">
                        <h2>Receipt</h2>
                    </div>

                    <div className="title-name">
                        Showing Receipt for {lastReceipt.purchase.user.name}
                </div>
                <ul>
                    
                </ul>
                
                    <div>
                   
                    </div>

                    <button>Show More</button>
                    <button>Exit</button>
                </div>
            
     
    </div>
  );
}
