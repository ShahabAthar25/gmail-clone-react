import React from 'react'

import WidgetOption from './WidgetOption'

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';

import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <WidgetOption Icon={CalendarTodayIcon} tooltip="Calender" />
            <WidgetOption Icon={NoteAddIcon} tooltip="Keep" />
            <WidgetOption Icon={AssignmentIndIcon} tooltip="Tasks" />
            <WidgetOption Icon={AccountCircleIcon} tooltip="Contacts" />
            <div className="line"></div>
            <div className="add-on" style={{ marginTop: "30px" }}>
                <WidgetOption Icon={AddIcon} tooltip="Get Add-ons" />
            </div>
        </div>
    )
}

export default Widgets
