import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyArW0wvnGH4kIBx_gjGIZiYgYrZ8YticKs",
    authDomain: "project-67-b96fb.firebaseapp.com",
    databaseURL: "https://project-67-b96fb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-67-b96fb",
    storageBucket: "project-67-b96fb.appspot.com",
    messagingSenderId: "333430145537",
    appId: "1:333430145537:web:42b219429d6cc76a28f600"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
