import React from 'react'
import './Button.scss'

function Button({name}) {
    return (
        <div className="button">
            <button>{name}</button>
        </div>
    )
}

export default Button
