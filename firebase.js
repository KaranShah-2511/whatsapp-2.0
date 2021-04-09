import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTby9H-eC-tw5DuLROsg4TFwysmaCxiVI",
    authDomain: "whatsapp-2-c222b.firebaseapp.com",
    projectId: "whatsapp-2-c222b",
    storageBucket: "whatsapp-2-c222b.appspot.com",
    messagingSenderId: "875891393074",
    appId: "1:875891393074:web:88d76c04d1f4401a50322b"
  };

  const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};