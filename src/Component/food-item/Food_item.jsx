import React, { useContext, useState } from 'react'
import './Food_item.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Storecontext } from '../../context/contextprovider'

function Food_item({ id, name, image, price, description }) {
  

  const {additem,removeitem,cartitem} = useContext(Storecontext)

  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt="" />
        {!cartitem[id]
          ?<img className='add' onClick={() => additem(id)} src={assets.add_icon_white} />
          :<div className='food-item-counter'>
            <img src={assets.remove_icon_red} onClick={() => removeitem(id)} alt="" />
            <p>{cartitem[id]}</p>
            <img src={assets.add_icon_green} onClick={() => additem(id)} />
          </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default Food_item