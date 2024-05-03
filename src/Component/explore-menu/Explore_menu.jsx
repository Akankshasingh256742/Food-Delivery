import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/frontend_assets/assets'

function Explore_menu({category,setcategory}) {
  return (
    <div className='explore_menu' id='explore_menu'>
      <h1>Explore our menu</h1>
      <p className='explore_menu_text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='explore_menu_list'>
        {menu_list.map((item, index) => {
          return (
          <div onClick={()=>setcategory((prev)=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore_menu_list_item'>
            <img className={category===item.menu_name?'Active':''} src={item.menu_image} alt="" srcset="" />
            <p>{item.menu_name}</p>
          </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Explore_menu