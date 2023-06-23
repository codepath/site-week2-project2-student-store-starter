import './CheckoutInfo.css'

export default function CheckoutInfo({ cart }) {
    return (
        <section className="receipt">
            <ul>
                <p><b>Thank you for your purchase!</b></p>
                {cart?.map(item => (
                    <li>{item.quantity} total {item.name} purchased at a cost of {item.price} for a total cost of {(item.price * item.quantity).toFixed(2)}.</li>
                ))}
            </ul>
        </section> 
    )
}