import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Mails from './Mails'
import Widgets from './Widgets'
import Navbar from './Navbar'
import Compose from './Compose'
import MailDetail from './MailDetail'

import './Gmail.css'

function Gmail({ auth, db }) {

    const [showCompose, setShowCompose] = useState(false)
    const [emailDetail, setEmailDetail] = useState(true)
    const [id, setId] = useState("")

    return (
        <div className="gamil">
            <Navbar auth={auth} />
            <div className="divide">
                <Sidebar setShowCompose={setShowCompose} />
                {emailDetail ? <Mails db={db} auth={auth} setEmailDetail={setEmailDetail} setId={setId} /> : <MailDetail auth={auth} db={db} id={id} setEmailDetail={setEmailDetail} />}
                <Widgets />
            </div>
            <Compose showCompose={showCompose} setShowCompose={setShowCompose} db={db} auth={auth} />
        </div>
    )
}

export default Gmail
