import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBnPGGFVV7wV8NYyGC4wK2Cc6NxH0jt6aU",
    authDomain: "proc67-f3008.firebaseapp.com",
    projectId: "proc67-f3008",
    storageBucket: "proc67-f3008.appspot.com",
    messagingSenderId: "901935133696",
    appId: "1:901935133696:web:8535bcd92579514f7014e5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();