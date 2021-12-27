import React,{useState} from "react"
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
//import AppsIcon from '@material-ui/icons/Apps';
import AppsIcon from '@mui/icons-material/Apps';
import "./css/header.css"
import { useSelector } from 'react-redux';
import { selectedUser } from "./features/userSlice";
import {auth,signOut} from "./firebase"
import { Redirect } from "react-router-dom";



const Header = () => {

    const [redirect,setRedirect]=useState("");

    const photoURL = useSelector((state) => state.user.photoURL);
    const user = useSelector(selectedUser);

    if(redirect){
        return <Redirect to={redirect}/>
    }


    const handleSignout=()=>{

     signOut(auth).then(()=>setRedirect("/")).catch((err)=>alert("couldn't logout error try again!"))

    }
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src="./images/logo.png" />
            </div>
            <div className="header_middle">
                <div className="search_mail">
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <input type="text" placeholder="Search mail" />
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

                {/* <div onClick={handleSignout}><Avatar src={photoURL}></Avatar></div> */}


                <div onClick={handleSignout}>
                    <Avatar src={user?.photoURL}></Avatar>
                </div>

            </div>
        </div>
    )
}

export default Header