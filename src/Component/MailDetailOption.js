import React from 'react'

import './MailDetailOption.css'

function mailDetailOption({ Icon, noSpace, small }) {
    return (
        <div className="mailDetailOption">
            <Icon className={`mailDetailOption__icon ${small && 'small'}`} />
        </div>
    )
}

export default mailDetailOption
