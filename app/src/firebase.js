import firebase from "firebase/app"
import"firebase/auth"


const app =firebase.initializeApp({
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    autDomain: process.env.REACR_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderIdL:process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app