import React from 'react'
import './Toggle.scss'

function Toggle({isMonthlyPrice,setIsMonthlyPrice}) {
    return (
        <div className="toggle-container">
            <p>Annually</p>
            <div onClick={()=>{
                    setIsMonthlyPrice(!isMonthlyPrice);
                }}
                className="toggle" style={isMonthlyPrice ? {justifyContent:'flex-end'}:{justifyContent:'flex-start'}}>
                <div className="toggle-circle">                    
                </div>
            </div>
            <p>Monthly</p>
        </div>
    )
}

export default Toggle
