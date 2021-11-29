import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require ('../../assets/home/shape-bg.png').default} alt="no internet connection" />
            </div>
        </div>
    )
}

export default Footer
