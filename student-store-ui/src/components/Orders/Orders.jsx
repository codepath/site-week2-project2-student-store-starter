import React from 'react'
import './Orders.css'

export default function Orders({ orders, setOrder, handleOrderClick }) {
  React.useEffect(() => {
    handleOrderClick()
  }, [])
    return (
      
        <div className="orders-wrapper">
            <div>Order Names</div>
      <ol className="ol-list">
        {orders.orders?.map((ele) => {
            return <li className="ord-list"><a href="#">{ele.user.name}</a>
              
            </li>
        })}
      </ol>
    </div>
  )
}
