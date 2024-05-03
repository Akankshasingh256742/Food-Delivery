import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../context/contextprovider'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartitem, food_list, removeitem ,totalCartamount} = useContext(Storecontext)
  const navigate =useNavigate()
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return <div>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt='' />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitem[item._id]}</p>
                <p>${cartitem[item._id] * item.price}</p>
                <p onClick={() => removeitem(item._id)} className='cross'>x</p>
              </div>
              <hr />
            </div>
          }
        })}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${totalCartamount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery</p>
            <p>${totalCartamount()>0?2:0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${totalCartamount()+2}</b>
          </div>
          <button onClick={()=>navigate('/placeorder')}>Proceed to checkout</button>
        </div>


      
      <div className="card-promocode">
        <div>
          <p>If you have promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart