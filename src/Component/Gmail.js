import React from 'react'

import Navbar from './Navbar'

function Gmail({ auth }) {
    return (
        <div className="gamil">
            <Navbar auth={auth} />
        </div>
    )
}

export default Gmail
