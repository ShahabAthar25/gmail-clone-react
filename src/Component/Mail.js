import React from 'react'

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarIcon from '@material-ui/icons/Star';

import './Mail.css'

function Mail({ username, text, date, title, id, setEmailDetail, setId }) {

    const displayTextCount = 100
    const displayTitleCount = 40

    // trimming text and title so they can fit  on screen
    const displayText = text.substring(0, displayTextCount)
    const displayTitle = title.substring(0, displayTitleCount)

    const handleOnClick = () => {
        setEmailDetail(false)
        setId(id)
    }

    return (
        <div className="mail" onClick={handleOnClick}>
            <div className="mail-left">
                <div className="mailIcons">
                    <CheckBoxOutlineBlankIcon className="checkBoxIcon mail-icon" />
                    <StarIcon className="staricon mail-icon" />
                </div>
                <h5>{username}</h5>
                <div className="mail-text">
                    <h5>{displayTitle}</h5>
                    <p>{displayText}</p>
                </div>
            </div>
            <div className="mail-right">
                <h5>{date}</h5>
            </div>
        </div>
    )
}

export default Mail
