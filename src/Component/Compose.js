import React from 'react'

import CloseIcon from '@material-ui/icons/Close';

import './Compose.css'

function Compose({ showCompose, setShowCompose }) {

    const handleOnClick = () => {
        setShowCompose(false)
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
                    <div className="to">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <button>Send</button>
            </footer>
        </div>
    )
}

export default Compose
