import React, { useState } from 'react'

import CloseIcon from '@material-ui/icons/Close';

import './Compose.css'

function Compose({ showCompose, setShowCompose, db }) {

    const [to, setTo] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleOnClick = () => {
        setShowCompose(false)
    }

    const sendMessage = () => {
        if (to !== "" || text !== "" || title !== "") {
            console.log('HEllo')
        } else {
            alert('Required Fields Not Filled')
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
                        <input type="text" placeholder="To " />
                    </div>
                    <div className="title">
                        <input type="text" placeholder="Subject " />
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
