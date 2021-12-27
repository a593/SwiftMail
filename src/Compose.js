import React, { useState } from 'react'
import "./css/compose.css"
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db,collection,addDoc } from './firebase';
import { selectedUser } from './features/userSlice';


function Compose() {

    const [to,setTo]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");
    const user=useSelector(selectedUser)


    const dispatch = useDispatch();

    const formSubmit =async (e)=>{
        e.preventDefault();
        if(to==="")
        {
            return alert("Email is required");
        }
        if(subject==="")
        {
            return alert("Subject is required");
        }
        if(message==="")
        {
            return alert("Message is required");
        }

       // db.collection("emails").add({
       //     to:to,
       //      subject:subject,
       //      message:message
       //      //timestamp: firebase.firestore.Fieldvalue.serverTimestamp()
 //
       //  });
        
       // new logic
       try {
           const result=await addDoc(collection(db,"emails"),{
               to,
               subject,
               from:user.email,
               fromName:user.displayName,
               message
           })
           
           console.log(result.id);
           alert("Email Sent Successfully");
           setTo("");
           setSubject("");
           setMessage(" ");
           dispatch(closeSendMessage());
       } catch (error) {
           console.log(error);
           
       }


    }
    return (
        <div className="compose">

            <div className="compose_header">
                <div className="compose_header_left">
                    <span>New Message</span>
                </div>
                <div className="compose_header_right">
                    <RemoveIcon />
                    <HeightIcon />
                    <div onClick={()=>dispatch(closeSendMessage())}><CloseIcon/></div>

                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className="compose_body">
                    <div className="compose_bodyForm">
                        <input type="email"
                            placeholder="Reciepents" value={to} onChange={(e)=>setTo(e.target.value)}/>

                        <input type="text"
                            placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>

                        <textarea rows="20"  onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>

                    </div>



                </div>

                <div className="compose_footer">
                    <div className="compose_footer_left">
                        <button type="submit">
                            Send <ArrowDropDownIcon />
                        </button>

                    </div>
                    <div className="compose_footer_right">

                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />



                    </div>



                </div>
            </form>

        </div>
    )
}

export default Compose;
