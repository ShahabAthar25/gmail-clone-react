import React from 'react'

import './MailOption.css'

function MailOption({ Icon, space, small }) {
    return (
        <div className="MailOption">
            <Icon className={`MailIcon && ${space && 'mail-margin'} ${small && 'mail-small'}`} />
        </div>
    )
}

export default MailOption
