import React from 'react'

import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./Navbar.css"

function Navbar({ auth }) {

    // accessing current user profile
    const currentUser = auth.currentUser

    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <MenuIcon className="menu" />
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
                </div>
                <div className="search">
                    <SearchIcon className="search_icon" />
                    <input type="text" className="search_bar" />
                    <ExpandMoreIcon className="more" />
                </div>
            </div>
            <div className="right">
                <HelpOutlineIcon className="icon" />
                <SettingsIcon className="icon" />
                <AppsIcon className="icon" />
                <div className="user">
                    <div className="dropdown">
                        <img src={currentUser.photoURL} className="dropbtn" alt="" />
                        <div className="dropdown-content">
                            <button onClick={() => auth.signOut()}>SignOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
