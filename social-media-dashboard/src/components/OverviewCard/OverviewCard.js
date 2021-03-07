import React from 'react'
import './OverviewCard.scss'

function OverviewCard(props) {
    return (
        <div style={props.isDarkToggled === false ? {background: 'var(--Light-Grayish-Blue)'} : {background: 'var(--Dark-Desaturated-Blue)'} } className="overview-card">
            <div className="overview-top">
                <h3 style={props.isDarkToggled === false ? {color: 'var(--Dark-Grayish-Blue)'} : {color: 'var(--Desaturated-Blue)'} }>{props.type}</h3>
                {props.icon}
            </div>
            <div className="overview-bottom">
                <h2 style={props.isDarkToggled === false ? {color: 'var(--Very-Dark-Blue)'} : {color: 'var(--White)'} }>{props.count}</h2>
                <div className="increase">
                    {props.icon2}
                    <p style={{color: `${props.decrease}`}}>{props.percent}</p>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard
