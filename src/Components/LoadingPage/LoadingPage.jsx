import React from 'react'
import gif from '../../images/logo.gif'
import './LoadingPage.css'




function LoadingPage() {
    return (
        <div className='container_loading'>
            <img className='logoanimation' src={gif} alt='Animated Logo'></img>
        </div>
    )
}

export default LoadingPage