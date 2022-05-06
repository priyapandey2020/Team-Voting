import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAeTieaI-OpNrKGVkXQAANeidnP_qkqP0g",
    authDomain: "voting-app-43e76.firebaseapp.com",
    databaseURL: "https://voting-app-43e76-default-rtdb.firebaseio.com",
    projectId: "voting-app-43e76",
    storageBucket: "voting-app-43e76.appspot.com",
    messagingSenderId: "821215932663",
    appId: "1:821215932663:web:25a0df14dae16a578323f2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();