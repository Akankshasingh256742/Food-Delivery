import React from 'react'
import './Food_display.css'
import { useContext } from 'react'
import { Storecontext } from '../../context/contextprovider'
import Food_item from '../food-item/Food_item'


function Food_display({ category }) {
    const { food_list } = useContext(Storecontext)

    console.log(food_list)

    return (
        <div className='food-display' id='food-display' >
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>

                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <Food_item key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
                    }
                })}
            </div>
        </div>
    )
}

export default Food_display