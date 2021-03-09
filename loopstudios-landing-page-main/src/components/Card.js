import React from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div style={{background: `url(${props.bgImage})`}} className="card">
            <img src={props.image} alt='card-image' />
            <div className="card-text">
                <h3>{props.first}</h3>
                <h3>{props.last}</h3> 
            </div>   
        </div>
    )
}

export default Card
