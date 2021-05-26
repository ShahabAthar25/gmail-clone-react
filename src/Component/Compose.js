import React, { useState } from 'react'

import CloseIcon from '@material-ui/icons/Close';

import './Compose.css'

function Compose({ showCompose, setShowCompose, db, auth }) {

    const [to, setTo] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const currentUser = auth.currentUser

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date()

    const displayDate = monthNames[date.getMonth()] + ' ' + date.getDate()

    const handleOnClick = () => {
        setShowCompose(false)
    }

    const sendMessage = () => {
        db.collection("mails").add({
            date: displayDate,
            sendTo: to,
            text: text,
            title: title,
            username: currentUser.displayName

        })

        console.log('send')
    }

    return (
        <div className={showCompose ? 'compose' : 'hidden'}>
            <header className="header">
                <div className="header-text">
                    <h4>New Message</h4>
                </div>
                <div className="header-icons">
                    <button onClick={handleOnClick}>
                        <CloseIcon />
                    </button>
                </div>
            </header>
            <div className="body">
                <div className="text">
                    <div className="to">
                        <input type="text" placeholder="To " onChange={(e) => setTo(e.target.value)} value={to} />
                    </div>
                    <div className="title">
                        <input type="text" placeholder="Subject " onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="text">
                        <textarea cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <button onClick={sendMessage}>Send</button>
            </footer>
        </div>
    )
}

export default Compose
