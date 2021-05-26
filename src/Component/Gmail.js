import React from 'react'

import Home from './Home'
import EmailView from './EmailView'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

function Gmail({ auth, db }) {

    return (
        <div className="gamil">
            <Router>
                    <Route path="/email/id/:id" exact>
                        <EmailView auth={auth} db={db} />
                    </Route>
                    <Route path="/" exact>
                        <Home auth={auth} db={db} />
                    </Route>
            </Router>
        </div>
    )
}

export default Gmail
