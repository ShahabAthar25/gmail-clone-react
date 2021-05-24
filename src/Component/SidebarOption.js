import React from 'react'

import './SidebarOption.css'

function SidebarOption({ text, Icon, active }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon className="sidebar_icon" />
            <h5>{text}</h5>
        </div>
    )
}

export default SidebarOption
