import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    apiKey: "AIzaSyDXmFhivCh3NrUGRbx8ciQdAzwcdAQ9RIM",
    authDomain: "vote-e32f0.firebaseapp.com",
    databaseURL: "https://vote-e32f0-default-rtdb.firebaseio.com",
    projectId: "vote-e32f0",
    storageBucket: "vote-e32f0.appspot.com",
    messagingSenderId: "812384822416",
    appId: "1:812384822416:web:a7c29a1d6d6d2cbec6a415",
    measurementId: "G-8N2PJVT7R7"
  

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();