import React from 'react'
import { Button } from "@material-ui/core"
//import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./css/sidebar.css"
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@material-ui/icons/Inbox';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';

import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from "react-redux";
import { openSendMessage} from "./features/mailSlice";
function Sidebar() {

    const dispatch =useDispatch();
    return (
        <div className="sidebar">
           

            <Button startIcon={<AddCircleIcon />}
                className="compose_btn" onClick={()=>dispatch(openSendMessage())}>Compose</Button>

            <Sidebaroptions Icon={MoveToInboxIcon} title="Inbox"
                number="224" isactive={true} />

            <Sidebaroptions Icon={StarRateIcon} title={"Starred"}
                number={500} />

            <Sidebaroptions Icon={WatchLaterIcon} title={"Snoozed"}
                number={300} />

            <Sidebaroptions Icon={LabelImportantIcon} title={"Important"}
                number={452} />

            <Sidebaroptions Icon={SendIcon} title={"Sent"}
                number={254} />

            <Sidebaroptions Icon={DraftsIcon} title={"Drafts"}
                number={254} />

            <Sidebaroptions Icon={LabelIcon} title={"Category"}
                number={254} />

            <Sidebaroptions Icon={DeleteIcon} title={"Trash"}
                number={254} />

            <Sidebaroptions Icon={FindInPageIcon} title={"Documents"}
                number={254} />

            <Sidebaroptions Icon={ExpandMoreIcon} title={"More"}
                number={254} />

            <hr />
            <h3 className="sidebaroptions_heading">

                Meet
            </h3>

            <Sidebaroptions Icon={VideocamIcon} title={"New meeting"}
            />

            <Sidebaroptions Icon={KeyboardIcon} title={"Join a meeting"}
            />


        </div>
    )
}



export default Sidebar
