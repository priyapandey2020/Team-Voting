import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC8pasEAM4xZYzpqnB7C5A1GInJc33s0ag",
    authDomain: "classtest-c332d.firebaseapp.com",
    databaseURL: "https://classtest-c332d-default-rtdb.firebaseio.com",
    projectId: "classtest-c332d",
    storageBucket: "classtest-c332d.appspot.com",
    messagingSenderId: "77920172515",
    appId: "1:77920172515:web:39d90608a3afbd2fa448d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();