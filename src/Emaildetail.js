import React from 'react'
import "./css/emaillist.css"
import { IconButton, Avatar } from "@material-ui/core"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectedMail } from './features/mailSlice';

function Emaildetail() {

    const mail=useSelector(selectedMail);
    const history = useHistory();
    return (
        <div className="emaildetails">
            <div className="emailist_settings">

                <div className="emailist_settingsLeft" >

                    <div onClick={()=>history.push('/')}>
                        <IconButton>

                            <ArrowBackIcon  />

                        </IconButton>
                    
</div>

                    <IconButton>

                        <ArrowDropDownIcon />

                    </IconButton>

                    <IconButton>

                        <RefreshIcon />

                    </IconButton>

                    <IconButton>

                        <MoreVertIcon />

                    </IconButton>

                </div>


                <div className="emailist_settingsRight">

                    <p>1-50 of 10,225</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>


                </div>

            </div>
            <div className="emaildetails_message">

                <div className="emaildetails_header">
                    <div className="emaildetails_headerLeft">
                        <h4>{mail.subject}</h4>
                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>
                    </div>
                    <div className="emaildetails_headerRight">
                        <IconButton>
                            <PrintIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>

                <div className="emaildetails_middleheader">
                    <div className="emaildetails_middleheaderLeft">

                        <IconButton>
                            <Avatar />
                        </IconButton>
                        <h4>{mail.name}</h4>
                        <p>{mail.email}</p>
                    </div>
                    <div className="emaildetails_middleheaderRight">


                        <p>{mail.time}</p>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>



                </div>

                <div className="emaildetails_body">
                    <p>{mail.message}</p>
                </div>

            </div>
        </div>
    )
}

export default Emaildetail
