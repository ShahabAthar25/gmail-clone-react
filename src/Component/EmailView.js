import React from 'react'

import './EmailView.css'

import Sidebar from './Sidebar'
import MailDetail from './MailDetail'
import Widgets from './Widgets'
import Navbar from './Navbar'

function EmailView({ auth, db }) {
    return (
        <div className="emailView">
            <Navbar auth={auth} />
            <div className="emailView__divide">
                <Sidebar />
                <MailDetail auth={auth} db={db} />
                <Widgets />
            </div>
        </div>
    )
}

export default EmailView
