  
import firebase from "firebase/app"
import "firebase/auth"



const app = firebase.initializeApp({
    apiKey: "AIzaSyAz4tVN4RCHMeotbonXSPc6FR6CnmDJKbQ",
    authDomain: "schedule-drive.firebaseapp.com",
    databaseURL: "https://schedule-drive-default-rtdb.firebaseio.com",
    projectId: "schedule-drive",
    storageBucket: "schedule-drive.appspot.com",
    messagingSenderId: "440499282696",
    appId: "1:440499282696:web:17d89431098132a70dc2bd"
  });
  // Initialize Firebase

  export const auth = app.auth()
  export default app