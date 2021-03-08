import React from 'react'
import './MainCard.scss'

function MainCard({isMonthlyPrice}) {
    return (
        <div className='maincard'>
            <h3>Professional</h3>
            <h1><span className='dollar'>$</span>{isMonthlyPrice? 24.99 : 249.99}</h1>
            <p>1 TB Storage</p>
            <p>5 Users Allowed</p>
            <p>Send up to 10 GB</p>
            <button className='btn-main'>LEARN MORE</button>
        </div>
    )
}

export default MainCard
