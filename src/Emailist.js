import React from 'react'
import EmailListSetting from './EmailListSetting'
import "./css/emaillist.css"
import Emailtype from './Emailtype'

function Emailist() {
    return (
        <div className="emaillist">
             <EmailListSetting/>
             <Emailtype/>
        </div>
    )
}

export default Emailist
