import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../../context/contextprovider'

function Navbar({setshowlogin}) {
    const [menu,setmenu] = useState('Home')
    const {totalCartamount} = useContext(Storecontext)

    return (
        <div className='navbar'>
                <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
                <ul className='navbar-menu'>
                    <Link to='/' onClick={()=>{
                        setmenu('Home')
                    }} className={menu=='Home'?'Active':''}>Home</Link>
                    <a href='#explore_menu' onClick={()=>{
                        setmenu('Menu')
                    }} className={menu=='Menu'?'Active':''}>Menu</a>
                    <a href='#app-download' onClick={()=>{
                        setmenu('Mobile App')
                    }} className={menu=='Mobile App'?'Active':''}>Mobile App</a>
                    <a href='#footer-content' onClick={()=>{
                        setmenu('Contact Us')
                    }} className={menu=='Contact Us'?'Active':''}>Contact Us</a>
                </ul>
            
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="image" />
                <div className="navbar-search-icon">
                    <Link to='/Cart'><img src={assets.basket_icon} alt="image" /></Link>
                    {totalCartamount()>0?<div className='dot'></div>:<></>}
                    
                </div>
                <button onClick={()=>{
                    setshowlogin(true)
                }} className='Signin'>Sign in</button>
            </div>

        </div>
    )
}

export default Navbar