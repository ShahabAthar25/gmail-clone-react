import React from 'react'

import './Mail.css'

function Mail({ username, text, date, key }) {
    return (
        <div>
            <div className="name">
                {username}
            </div>
            <div className="text">
                {text}
            </div>
            <div className="date">
                {date}
            </div>
        </div>
    )
}

export default Mail
