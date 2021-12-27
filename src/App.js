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
  Link,
  Redirect
} from "react-router-dom";
import Login from './login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { signin, signout } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const dispatch = useDispatch();
  const isMessageOpen = useSelector((state) => state.mail.sendMessageIsOpen);
  const user = useSelector((state) => state.user.id);
  console.log('user', user);


  onAuthStateChanged(auth,(user)=>{
  
    if(user){
      dispatch(signin({id:user.uid,photoURL:user.photoURL}));
    }
    else{
      dispatch(signout())
    }
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard">
          {user ? <div className="App">
            <Header />


            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Emailist />
                </Route>

                <Route path="/mail">
                  <Emaildetail />
                </Route>
              </Switch>
            </div>
            {
              isMessageOpen && <Compose />
            }

          </div> : <h2>You are not logged in</h2>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
