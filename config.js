import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBqWZDmtVUMLbvisIW9MUHflT13Q2RVGyY",
    authDomain: "team-voting-c7925.firebaseapp.com",
    projectId: "team-voting-c7925",
    storageBucket: "team-voting-c7925.appspot.com",
    messagingSenderId: "298281448414",
    appId: "1:298281448414:web:92a3c588276bf4242b234f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();