import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Mails from './Mails'
import Widgets from './Widgets'
import Navbar from './Navbar'
import Compose from './Compose'

import './Gmail.css'

function Home({ auth, db,  }) {

    const [showCompose, setShowCompose] = useState(false)

    return (
        <div className="home">
            <Navbar auth={auth} />
            <div className="divide">
                <Sidebar setShowCompose={setShowCompose} />
                <Mails db={db} auth={auth} />
                <Widgets />
            </div>
            <Compose showCompose={showCompose} setShowCompose={setShowCompose} db={db} auth={auth} />
        </div>
    )
}

export default Home
