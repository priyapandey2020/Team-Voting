import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = var firebaseConfig = {
  apiKey: "AIzaSyAxbrFeHhLY-yUaG4YS1mglJMqXhW5f6Co",
  authDomain: "pro-67-d8b6a.firebaseapp.com",
  projectId: "pro-67-d8b6a",
  storageBucket: "pro-67-d8b6a.appspot.com",
  messagingSenderId: "1074042044180",
  appId: "1:1074042044180:web:da7a3a6b759b4a8ee04c01"
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
