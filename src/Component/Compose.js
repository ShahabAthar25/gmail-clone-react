import React, { useState } from 'react'

import CloseIcon from '@material-ui/icons/Close';
import firebase from 'firebase'

import './Compose.css'

function Compose({ showCompose, setShowCompose, db, auth }) {

    const [to, setTo] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const currentUser = auth.currentUser

    // storring months names for later use
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Getting Date
    const date = new Date()

    // Converting it into month names and day numbers
    const displayDate = monthNames[date.getMonth()] + ' ' + date.getDate()

    // closing compose menu
    const handleOnClick = () => {
        setShowCompose(false)
    }

    const sendMessage = () => {
        // checking if any fields are empty
        if (to !== "" & text !== "" & title !== "") {
            db.collection("emails").add({
                date: displayDate,
                sendTo: to,
                text: text,
                title: title,
                username: currentUser.displayName,
                photo: currentUser.photoURL,
                email: currentUser.email,
                id: Math.random(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            
            // resetting Fields
            setText("")
            setTitle("")
            setTo("")
            
            // Alerting the user that the message was sent
            alert('Email Send Successfully')
        } else {
            alert("Required Fields Not Filled")
        }
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
