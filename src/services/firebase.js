// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
require('firebase/database')

const firebaseConfig = {
    apiKey: "AIzaSyA_wPWtDvMzz0nXXzRdqEIpDt3h3hEuyG8",
    authDomain: "whatsapp-clone-225fe.firebaseapp.com",
    projectId: "whatsapp-clone-225fe",
    storageBucket: "whatsapp-clone-225fe.appspot.com",
    messagingSenderId: "162757236972",
    appId: "1:162757236972:web:58c2a22be267b5bfd0adc9",
    measurementId: "G-MGNJ5YQXDE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;