import React from 'react'

import './MailDetail.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MailIcon from '@material-ui/icons/Mail';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ForwardIcon from '@material-ui/icons/Forward';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MailDetailOption from './MailDetailOption';

function MailDetail() {
    return (
        <div className="mailDetail">
            <div className="mailDetail__icons">
                <div className="mailDetail__left">
                    <MailDetailOption Icon={ArrowBackIcon} />
                    <MailDetailOption Icon={AssignmentReturnedIcon} />
                    <MailDetailOption Icon={ReportIcon} />
                    <MailDetailOption Icon={DeleteIcon} />
                    <div className="seprater"></div>
                    <MailDetailOption Icon={MailIcon} />
                    <MailDetailOption Icon={WatchLaterIcon} />
                    <MailDetailOption Icon={PlaylistAddCheckIcon} />
                    <div className="seprater"></div>
                    <MailDetailOption Icon={ForwardIcon} />
                    <MailDetailOption Icon={LabelIcon} />
                    <MailDetailOption Icon={MoreVertIcon} />
                </div>
                <div className="mailDetail__right">
                    <MailDetailOption Icon={KeyboardIcon} />
                    <MailDetailOption Icon={ExpandMoreIcon} small />
                </div>
            </div>
            <div className="body">
                <div className="title"></div>
            </div>
        </div>
    )
}

export default MailDetail
