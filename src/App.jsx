import React, { useState } from 'react'
import Navbar from './Component/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/PlaceOrder/Placeorder'
import Footer from './Component/footer/Footer'
import Loginpopup from './Component/loginpopup/Loginpopup'

function App() {
  const [showlogin , setshowlogin]= useState(false)

  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin} />: <></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorder' element={<Placeorder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App