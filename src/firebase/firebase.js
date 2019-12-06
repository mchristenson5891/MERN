import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const firebase = app.initializeApp(config)
const auth = firebase.auth()
const googleProvider = new app.auth.GoogleAuthProvider()
const storage = firebase.storage()
const storageRef = storage.ref()

const doSignInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider)
}

const doAddFile = file =>
    storageRef
        .child(`profilePics/${file.name}`)
        .put(file)

const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

const doSignOut = () => auth.signOut()

// const doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);




export {
    firebase,
    doSignInWithGoogle,
    doAddFile,
    doCreateUserWithEmailAndPassword,
    auth,
    doSignOut
}