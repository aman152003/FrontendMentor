import React from 'react'
import './Feature.scss'

import featureImage from '../images/desktop/image-interactive.jpg'

function Feature() {
    return (
        <div className="feature">
             <div className="feature-text">
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
            <div className="feature-image">
                <img src={featureImage} alt="feature-image" />
            </div>
        </div>
    )
}

export default Feature


