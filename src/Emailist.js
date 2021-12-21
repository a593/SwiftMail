import React, { useState, useEffect } from 'react'
import EmailListSetting from './EmailListSetting'
import "./css/emaillist.css"
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'
import { db, collection, addDoc, query, getDocs } from './firebase'
import { doc, onSnapshot } from '@firebase/firestore'


function Emailist() {

    const [emails, setEmails] = useState([]);
    const [records,setRecords]=useState([]);

    // useEffect(() => {
    //    db.collection("emails").onSnapshot(snapshot=>{
    //        setEmails(snapshot.docs.map(doc=>({
    //            id:doc.id,
    //            data:doc.data()
    //        })))
    //    })
    // }, [])  

    useEffect(() => {

        async function retriveData() {
            const documents=[];
            const q = query(collection(db, "emails"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc)=>{
                documents.push(doc.data());
            })
            setRecords(documents);
        }
        retriveData();
    },[])


    return (
        <div className="emaillist">
            <EmailListSetting />
            <Emailtype />
             {/* <Emailbody name="Virat Kohli" subject="This is Subject" message="We are Here"/>  */}
            {records.length>0 ? records.map((ele,index)=>{
                return(
                    <Emailbody key={index} name={ele.fromName} email={ele.from} subject={ele.subject} message={ele.message}/>
                )
            }):<h3>No record found</h3>}
        </div>
    )

}
export default Emailist
