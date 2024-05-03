import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/header/Header.jsx'
import Explore_menu from '../../Component/explore-menu/Explore_menu.jsx'
import Food_display from '../../Component/food_desplay/Food_display.jsx'
import App_download from '../../Component/App-download/App_download.jsx'



function Home() {
  const [category,setcategory] = useState('All') 


  return (
    <div>
        <Header/>
        <Explore_menu category={category} setcategory={setcategory} />
        <Food_display category={category} />
        <App_download />
    </div>
  )
}

export default Home