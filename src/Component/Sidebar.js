import React from 'react'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <button className="sidebar-btn" href="/">
                <div className="img">
                    <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" />
                </div>
                <div className="text">Compose</div>
            </button>
        </div>
    )
}

export default Sidebar
