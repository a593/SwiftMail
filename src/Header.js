import react from "react"
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton,Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
//import AppsIcon from '@material-ui/icons/Apps';
import AppsIcon from '@mui/icons-material/Apps';
import "./css/header.css"

const Header = ()=>{
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
               <ReorderIcon></ReorderIcon>
               </IconButton>
               <img src="./images/logo.png"/>
               </div>
            <div className="header_middle">
                <div className="search_mail">
                <IconButton>
               <SearchIcon></SearchIcon>
               </IconButton>
               <input type="text" placeholder="Search mail"/>
               <IconButton>
               <ExpandMoreIcon></ExpandMoreIcon>
               </IconButton>
                </div>
            </div>
            <div className="header_right">
            <IconButton>
               <HelpOutlineIcon></HelpOutlineIcon>
               </IconButton>

                <IconButton>
               <SettingsIcon></SettingsIcon>
               </IconButton>

                <IconButton>
               <AppsIcon></AppsIcon>
               </IconButton>  
               

               <Avatar src="data:image/jpeg;base64,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"></Avatar>

            </div>
        </div>
    )
}

export default Header