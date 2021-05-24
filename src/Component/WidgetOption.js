import React from 'react'

import './WidgetOption.css'

function WidgetOption({ Icon, tooltip }) {
    return (
        <div className="widgetOption" title={tooltip}>
            <Icon className="widgetIcon" />
        </div>
    )
}

export default WidgetOption
