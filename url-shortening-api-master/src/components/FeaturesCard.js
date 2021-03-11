import React from 'react'
import './FeaturesCard.scss'

function FeaturesCard({title,info,svg}) {
    return (
        <div className="features-card">
            <div className="image">
                {svg}
            </div>
            <div className="card">
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default FeaturesCard
