import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Compose from './Compose';
import Emaildetail from './Emaildetail';
import Emailist from './Emailist';
// import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { signin,signout } from './features/userSlice';

function App() {

  const dispatch=useDispatch();
  const isMessageOpen = useSelector((state) => state.mail.sendMessageIsOpen);
 const user=useSelector((state)=> state.user.value);
 console.log(user);


  // useEffect(()=>{
  //   auth.onAuthStateChanged((user)=>{
  //     if(user)
  //     {

  //       dispatch(signin({
  //         displayName:user.displayName,
  //         photoURL: user.photoURL,
  //         email: user.email
  //     }))

  //     }
  //     else{
  //  dispatch(signout())
  //     }
  //   })
  // })

  return (
    <Router>
    {
      user && (
        <div className="App">
      <Header />


      <div className="app_body">
        <Sidebar />
        <Switch>
          <Route exact path="/">
          <Emailist />
          </Route>

          <Route path="/mail">
          <Emaildetail/>
          </Route>
        </Switch>
      </div>
      {
        isMessageOpen && <Compose />
      }

    </div>
      )} : {(
        <Login/>
      )
    }
    
    </Router>
  );
}

export default App;
