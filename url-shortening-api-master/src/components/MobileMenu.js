import React from 'react'
import './MobileMenu.scss'

import Button from './Button'

function MobileMenu({isMenuToggled,setIsMenuToggled}) {
    return (
        <div style={isMenuToggled ? {display : 'block'} : {display: 'none'}} className="mobile-menu-container">
            <div className="mobile-menu">
                <div className="top">
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div className="bottom">
                    <li><a href="#">Login</a></li>
                    <Button name="Sign Up" />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
