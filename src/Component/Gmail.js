import React from 'react'

import Navbar from './Navbar'

import Sidebar from './Sidebar'
import Mails from './Mails'
import Widgets from './Widgets'

import './Gmail.css'

function Gmail({ auth, db }) {
    return (
        <div className="gamil">
            <Navbar auth={auth} />
            <div className="divide">
                <Sidebar />
                <Mails db={db} />
                <Widgets />
            </div>
        </div>
    )
}

export default Gmail
