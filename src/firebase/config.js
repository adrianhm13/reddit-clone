import { initializeApp } from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAzSJ2uXHeAQ5hRtBVU6KgdwD7taCT4ESA",
    authDomain: "reddit-clone-59235.firebaseapp.com",
    projectId: "reddit-clone-59235",
    storageBucket: "reddit-clone-59235.appspot.com",
    messagingSenderId: "257025812458",
    appId: "1:257025812458:web:ce8b95c42136ef42f0b493"
  };

  //Init services
  initializeApp(firebaseConfig)

  //Init firestore
  const db = getFirestore()

  //Init auth
  const auth = getAuth();

  //Timestamp
  const timestamp = serverTimestamp()

  export {db, auth, timestamp}