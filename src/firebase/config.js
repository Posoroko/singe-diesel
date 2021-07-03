import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyACQl8x_FSMYt9wtMNfl-lLCAUOzx867JU",
    authDomain: "singe-diesel.firebaseapp.com",
    projectId: "singe-diesel",
    storageBucket: "singe-diesel.appspot.com",
    messagingSenderId: "321576414673",
    appId: "1:321576414673:web:d2b739ce395c45623b04f0",
    measurementId: "G-Y38H2FKML3"
  };


  // init firebase
firebase.initializeApp(firebaseConfig)


// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }