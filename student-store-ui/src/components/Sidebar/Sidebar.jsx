import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import openarrow from "remixicon-react/ArrowRightFillIcon"
import Checkout from "../Checkout/Checkout"

export default function Sidebar({cart, setQuantities, quantities, originalProducts }) {
  const [subtotal, setSubtotal] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  const [taxes, setTaxes] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [checkout, setCheckout] = React.useState(false)



  let filterdata = quantities.filter(([id, quantity]) => quantity > 0)
  console.log('fd', filterdata)

  // console.log('cart',cart)

  // React.useEffect(() => {
  //   setCart(filterdata)

  // }, [])


  React.useEffect(() => {
    const calculateSubtotal = () => {
      let newSubtotal = 0;
      {
        // cart?.map(([id, quantity]) => {
        
        filterdata.map(([id, quantity]) => {
          const product = originalProducts.find(product => product.id === id)
          newSubtotal += product.price * quantity
        })
        setSubtotal(newSubtotal)
      }
    }

    calculateSubtotal()
  }, [quantities])
console.log(subtotal)
  React.useEffect(() => {
    const calculateTaxes = () => {
      const newTaxes = subtotal * 0.0875
      setTaxes(newTaxes, originalProducts)
    }

    calculateTaxes()
  }, [subtotal])

  React.useEffect(() => {
    const calculateTotal = () => {
      const newTotal = subtotal + taxes
      setTotal(newTotal)
    }
    calculateTotal()
  }, [taxes])


  return (
    <section className="sidebar" style={{ width: isOpen ? "32%" : "3%" }}>
      <button onClick={() => { setIsOpen(!isOpen) }} >  {isOpen ? ('<=') : ('=>')} </button>
      {
        isOpen ? (
        <>
        <ShoppingCart 
        cart={cart}
        email={email} 
        setEmail={setEmail} 
        setName={setName} 
        name={name} 
        subtotal={subtotal} 
        taxes={taxes} 
        total={total} 
        setCheckout={setCheckout}
        originalProducts={originalProducts} 
        quantities={quantities} />
        {checkout?( 
        <Checkout 
        name={name} 
        email={email} 
        cart={cart}
        quantities={quantities} 
        setQuantities={setQuantities}
        originalProducts={originalProducts} 
        taxes={taxes} 
        total={total} 
        subtotal={subtotal} 
        setCheckout={setCheckout}/>):(<p className="conmail"> A confirmation email will be sent to you so that you can confirm thus order. Once you have confirmed the order, it will be delivered to your dorm room.</p>)}
        </>) : (<></>)
      }
      

    </section>

  )
}

