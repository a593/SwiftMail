import React from 'react'
import { useDispatch } from 'react-redux'
import "./css/login.css"
import { signin } from './features/userSlice';
import { auth,provider } from './firebase'

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function Login() {


    const dispatch=useDispatch();

    const login = ()=>{
        signInWithPopup(auth, provider)
        .then(({user})=>{
                      dispatch(signin({
                          displayName:user.displayName,
                          photoURL: user.photoURL,
                          email: user.email
                      }))

        }).catch(error=>{
            alert(error)
        })
    }
    return (
        <div className="loginwrapper">
            <div className="login">
                <img src="./images/logo.png"/>

                <button className="gmail_login"  onClick={login}>Login with SwifTMail</button>
            </div>


        </div>
    )
}

export default Login
