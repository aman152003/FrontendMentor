import React from 'react'
import './SideCard.scss'

function SideCard(props) {
    return (
        <div className="sidecard">
            <h3>{props.type}</h3>
            <h1><span className='dollar'>$</span>{props.isMonthlyPrice ? props.monthlyPrice : props.price}</h1>
            <p>{props.storage} Storage</p>
            <p>{props.users} Users Allowed</p>
            <p>Send up to {props.data} GB</p>
            <button>LEARN MORE</button>
        </div>
    )
}

export default SideCard
