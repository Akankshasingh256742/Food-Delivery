import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/contextprovider'

function Placeorder() {
  const {totalCartamount} =useContext(Storecontext)
  return (
      <form className='place-order'>
              <div className="place-order-left">
                <div className="title">Delivery Information</div>
                  <div className="multi-fields">
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name' />
                  </div>
                   <input type="email" placeholder='Email' />
                   <input type="text" placeholder='street' />
                   <div className="multi-fields">
                    <input type="text" placeholder='City'/>
                    <input type="text" placeholder='State' />
                  </div>
                  <div className="multi-fields">
                    <input type="text" placeholder='Zip Code'/>
                    <input type="text" placeholder='Country' />
                  </div>
                  <input type="text" placeholder='Phone' />
              </div>
              <div className="place-order-right">
              <div className="cart-total">
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${totalCartamount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${totalCartamount()+2}</b>
          </div>
          <button onClick={()=>navigate('/placeorder')}>Place an Order</button>
        </div>

              </div>
      </form>
  )
}

export default Placeorder