import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDonelKOb1E4rARSlQ36xd-BKn1D4RWCqU",
    authDomain: "classtest-43564.firebaseapp.com",
    projectId: "classtest-43564",
    storageBucket: "classtest-43564.appspot.com",
    messagingSenderId: "472006402684",
    appId: "1:472006402684:web:3ba67bb00a817ae217dff9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();