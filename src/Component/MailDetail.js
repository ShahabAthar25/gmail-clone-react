import React, { useState, useEffect } from 'react'

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
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import PrintIcon from '@material-ui/icons/Print';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import MailDetailOption from './MailDetailOption';

function MailDetail({ auth, db, id, setEmailDetail }) {

    const [mails, setMails] = useState([])

    // getting data from firebase where id is cureent id of email
    useEffect(() => {
        db.collection("emails").where("id", "==", id).onSnapshot((snapshot) =>
            // storring the data from firebase
            setMails(snapshot.docs.map((doc) => doc.data()))
        );
        //Ignoring Warning with below line it is ignored with a comment
        // eslint-disable-next-line
    }, []);

    const handleOnClick = () => {
        setEmailDetail(true)
    }

    return (
        <div className="mailDetail">
            <div className="mailDetail__icons">
                <div className="mailDetail__left">
                    <button className="mailDetail__btn" onClick={handleOnClick}>
                        <MailDetailOption Icon={ArrowBackIcon} />
                    </button>
                    <MailDetailOption Icon={AssignmentReturnedIcon} />
                    <MailDetailOption Icon={ReportIcon} />
                    <MailDetailOption Icon={DeleteIcon} />
                    <div className="mailDetail__seprater"></div>
                    <MailDetailOption Icon={MailIcon} />
                    <MailDetailOption Icon={WatchLaterIcon} />
                    <MailDetailOption Icon={PlaylistAddCheckIcon} />
                    <div className="mailDetail__seprater"></div>
                    <MailDetailOption Icon={ForwardIcon} />
                    <MailDetailOption Icon={LabelIcon} />
                    <MailDetailOption Icon={MoreVertIcon} />
                </div>
                <div className="mailDetail__right">
                    <MailDetailOption Icon={KeyboardIcon} />
                    <MailDetailOption Icon={ExpandMoreIcon} small />
                </div>
            </div>
            {mails.map((mail) => (
                <div className="mailDetaile__Detail">
                    <div className="mailDetail__titleIcon">
                        <div className="title">
                            <h2>{mail.title}</h2>
                        </div>
                        <div className="mailDetail__icon">
                            <MailDetailOption Icon={PrintIcon} />
                            <MailDetailOption Icon={OpenInNewIcon} />
                        </div>
                    </div>
                    <div className="mailDetail__header">
                        <div className="mailDetail__info">
                            <div className="mailDetail__right">
                                <div className="avatar">
                                    <img src={mail.photo} alt="" />
                                </div>
                                <div className="name">
                                    <h4>{mail.username}</h4>
                                    <p>{mail.email}</p>
                                </div>
                            </div>
                            <div className="mailDetail__left">
                                <div className="date">
                                    <h5>{mail.date}</h5>
                                </div>
                                <MailDetailOption Icon={StarBorderIcon} />
                                <MailDetailOption Icon={ReplyIcon} />
                                <MailDetailOption Icon={MoreVertIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="mailDetail__body">
                        <div className="mailDetail__text">
                            <p>{mail.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MailDetail
