import './App.css';

import firebase from 'firebase'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth"

import Gmail from './Component/Gmail'
import SignIn from './Component/SignIn'

firebase.initializeApp({
  apiKey: "AIzaSyAufFgFHXcGCb3czH3Jf1NT4ywiHItey7o",
  authDomain: "clone-13a08.firebaseapp.com",
  projectId: "clone-13a08",
  storageBucket: "clone-13a08.appspot.com",
  messagingSenderId: "164534224241",
  appId: "1:164534224241:web:1abd246554cb30d8e7a2d0"
})

function App() {

  const auth = firebase.auth()

  const [user] = useAuthState(auth)

  const db = firebase.firestore()

  return (
    <div className="App">
      {user ? <Gmail auth={auth} db={db} />  : <SignIn auth={auth} />}
    </div>
  );
}

export default App;
