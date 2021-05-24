import React from 'react'

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InboxIcon from '@material-ui/icons/Inbox';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Mails.css'

import MailOption from './MailOption';

function Mails() {
    return (
        <div className="mails">
            <header className="mails_icons">
                <div className="mail-left">
                    <MailOption Icon={CheckBoxOutlineBlankIcon} />
                    <MailOption Icon={ExpandMoreIcon} space />
                    <MailOption Icon={RefreshIcon} space />
                    <MailOption Icon={MoreVertIcon} space />
                </div>
                <div className="mail-right">
                    <MailOption Icon={KeyboardIcon} />
                    <MailOption Icon={ExpandMoreIcon} space small />
                </div>
            </header>
        </div>
    )
}

export default Mails
