import React from 'react'
import './app_download.css'
import { assets } from '../../assets/frontend_assets/assets'

function App_download() {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience download <br /> Tomato App</p>
        <div className='app-download-platform'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default App_download