import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_4IeD2B7tSh-1i7YQShDodNAKH7kLsF8",
  authDomain: "clone-edb1c.firebaseapp.com",
  projectId: "clone-edb1c",
  storageBucket: "clone-edb1c.appspot.com",
  messagingSenderId: "98567052350",
  appId: "1:98567052350:web:a5c47e970abd37d70e056f",
  measurementId: "G-1RCLDTXKT0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;