import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDKSOOJsWQS7y8Jicqo7DOEosDrmw_1Z6I",
  authDomain: "project67-ce923.firebaseapp.com",
  databaseURL: "https://project67-ce923-default-rtdb.firebaseio.com",
  projectId: "project67-ce923",
  storageBucket: "project67-ce923.appspot.com",
  messagingSenderId: "480996081284",
  appId: "1:480996081284:web:ff8e43e6b0c2dcb0128cd1"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();