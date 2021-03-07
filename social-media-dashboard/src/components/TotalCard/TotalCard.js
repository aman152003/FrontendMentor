import React from 'react'
import './TotalCard.scss'

function TotalCard(props) {
    return (
        <div style={props.isDarkToggled === false ? {backgroundColor: 'var(--Light-Grayish-Blue)',borderTop: `5px solid ${props.color}`} : {backgroundColor: 'var(--Dark-Desaturated-Blue)',borderTop: `5px solid ${props.color}`}} className="total-card">
            <div className="social-handle">
                {props.svg}
                <p style={props.isDarkToggled === false ? {color: 'var(--Dark-Grayish-Blue)'} : {color: 'var(--Desaturated-Blue)'}}>{props.name}</p>
            </div>
            <h1 style={props.isDarkToggled === false ? {color: 'var(--Very-Dark-Blue)'} : {color: 'var(--White)'}}>{props.followers}</h1>
            <h2 style={props.isDarkToggled === false ? {color: 'var(--Dark-Grayish-Blue)'} : {color: 'var(--Desaturated-Blue)'}}>{props.type}</h2>
            <div className="social-increase">
                {props.svg2}
                <p style={{color: `${props.decrease}`}}>{props.change}</p>
            </div>
        </div>
    )
}

export default TotalCard
