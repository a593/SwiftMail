import { getAuth,GoogleAuthProvider,signOut } from "firebase/auth";

import {initializeApp} from "firebase/app";
import {getFirestore,collection, addDoc,query,getDocs} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCE7BgZ0Gkjsvt7p5I91m6ik-3NwRiIwDg",
    authDomain: "swiftmail-e9ac1.firebaseapp.com",
    projectId: "swiftmail-e9ac1",
    storageBucket: "swiftmail-e9ac1.appspot.com",
    messagingSenderId: "370143450391",
    appId: "1:370143450391:web:3f822a8d6d9471b82bd352"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore();
 // const db=firebaseApp.getFirestore;

  //const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  // const auth=firebase.auth();
  // const provider=new firebase.auth.GoogleAuthProvider();


  const auth = getAuth();
  // const provider=new firebase.auth.GoogleAuthProvider();
  const provider = new GoogleAuthProvider();


  export {db,collection,addDoc,query,getDocs,auth,provider,signOut};
