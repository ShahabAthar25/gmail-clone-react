import React from 'react'

import './Sidebar.css'
import SidebarOption from './SidebarOption'

import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar({ setShowCompose }) {

    const handleOnClick = () => {
        setShowCompose(true)
    }

    return (
        <div className="sidebar">
            <div className="btn-sidebar">
                <button className="sidebar-btn" onClick={handleOnClick}>
                    <div className="img">
                        <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" />
                    </div>
                    <div className="text">Compose</div>
                </button>
            </div>
            <div className="Option">
                <SidebarOption text="Inbox" Icon={InboxIcon} active />
                <SidebarOption text="Starred" Icon={StarIcon} />
                <SidebarOption text="Snoozed" Icon={WatchLaterIcon} />
                <SidebarOption text="Sent" Icon={SendIcon} />
                <SidebarOption text="Drafts" Icon={InsertDriveFileIcon} />
                <SidebarOption text="More" Icon={ExpandMoreIcon} />
            </div>
        </div>
    )
}

export default Sidebar
