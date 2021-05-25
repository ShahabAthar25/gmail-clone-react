import React, { useState } from 'react'

import Navbar from './Navbar'

import Sidebar from './Sidebar'
import Mails from './Mails'
import Widgets from './Widgets'
import Compose from './Compose'

import './Gmail.css'

function Gmail({ auth, db }) {

    const [showCompose, setShowCompose] = useState(false)

    return (
        <div className="gamil">
            <Navbar auth={auth} />
            <div className="divide">
                <Sidebar setShowCompose={setShowCompose} />
                <Mails db={db} auth={auth} />
                <Widgets />
            </div>
            <Compose showCompose={showCompose} setShowCompose={setShowCompose} db={db} />
        </div>
    )
}

export default Gmail
